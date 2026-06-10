#!/usr/bin/env tsx
/**
 * Import data from a Contentful CLI export (`pnpm export:contentful`) into Payload.
 *
 * Usage:
 *   pnpm migrate:contentful            # import, skipping entries already mapped
 *   pnpm migrate:contentful --fresh    # wipe media/time/event/person first, then import
 *
 * Pipeline:
 *   1. Media   – upload downloaded asset binaries, localized `alt`
 *   2. Content – create time / event / person (scalars + image + localized richText→content)
 *   3. Resolve – second pass to set person `spouse` / `children` relationships
 *
 * The Contentful field `richText` maps to Payload `content`; `childs` maps to
 * `children`. `bibleBook` entries are intentionally not migrated (no collection).
 */
import { convertHTMLToLexical, editorConfigFactory } from '@payloadcms/richtext-lexical'
import dotenv from 'dotenv'
import fs from 'fs'
import { JSDOM } from 'jsdom'
import path from 'path'

import type { Person } from '@/payload-types'

dotenv.config()

// The collection afterChange/afterDelete hooks index into Algolia per record;
// skip that during the bulk import and run `pnpm reindex:algolia` afterwards.
process.env.DISABLE_ALGOLIA = 'true'

type LexicalContent = NonNullable<Person['content']>

const EXPORT_DIR = 'contentful-export'
const EXPORT_FILE = path.join(EXPORT_DIR, 'export.json')

type CFLink = { sys: { id: string; linkType: 'Asset' | 'Entry' } }
type CFLocalized<T> = Record<string, T>
type CFEntry = {
  sys: { id: string; contentType: { sys: { id: string } } }
  fields: Record<string, CFLocalized<unknown>>
}
type CFFile = {
  url: string
  fileName: string
  contentType: string
  details?: { image?: { width: number; height: number } }
}
type CFAsset = {
  sys: { id: string }
  fields: {
    title?: CFLocalized<string>
    description?: CFLocalized<string>
    file?: CFLocalized<CFFile>
  }
}
type CFExport = {
  locales: { code: string; default: boolean; fallbackCode: string | null }[]
  entries: CFEntry[]
  assets: CFAsset[]
}

type ContentCollection = 'time' | 'event' | 'person'

const isLink = (v: unknown): v is CFLink => typeof v === 'object' && v !== null && 'sys' in v

const linkId = (v: unknown): string | null => (isLink(v) ? v.sys.id : null)

const main = async () => {
  const fresh = process.argv.includes('--fresh')

  const exportData = JSON.parse(fs.readFileSync(EXPORT_FILE, 'utf8')) as CFExport

  const defaultLocale = exportData.locales.find((l) => l.default)?.code ?? 'en'
  /** Value of a Contentful field for a given locale, falling back to default. */
  const at = <T = unknown>(
    field: CFLocalized<unknown> | undefined,
    locale: string,
  ): T | undefined => (field?.[locale] ?? field?.[defaultLocale]) as T | undefined

  // `@contentful/rich-text-html-renderer` ships a rollup CJS bundle whose named
  // exports tsx's static ESM linker can't detect; a dynamic import resolves it.
  const { documentToHtmlString } = await import('@contentful/rich-text-html-renderer')

  console.info('🔌 Initializing Payload...')
  const { getPayload } = await import('payload')
  const config = (await import('../src/payload.config.js')).default
  const payload = await getPayload({ config })

  const editorConfig = await editorConfigFactory.default({
    config: payload.config,
  })

  let skippedEmbeds = 0
  const richTextToLexical = (doc: unknown): LexicalContent | undefined => {
    if (!doc) return undefined
    const html = documentToHtmlString(doc as Parameters<typeof documentToHtmlString>[0], {
      renderNode: {
        'embedded-asset-block': () => {
          skippedEmbeds++
          return ''
        },
        'embedded-entry-block': () => {
          skippedEmbeds++
          return ''
        },
        'embedded-entry-inline': () => {
          skippedEmbeds++
          return ''
        },
      },
    })
    if (!html.trim()) return undefined
    return convertHTMLToLexical({ editorConfig, html, JSDOM })
  }

  if (fresh) {
    console.info('🧹 --fresh: clearing media/time/event/person ...')
    for (const collection of ['person', 'time', 'event', 'media'] as const) {
      await payload.delete({ collection, where: { id: { exists: true } } })
    }
  }

  // ---- Pass 1: Media -------------------------------------------------------
  const assetIdToMediaId = new Map<string, number>()
  let mediaCreated = 0
  let mediaSkipped = 0

  for (const asset of exportData.assets) {
    const file = at<CFFile>(asset.fields.file, defaultLocale)
    if (!file?.url) {
      mediaSkipped++
      continue
    }
    const diskPath = path.join(EXPORT_DIR, file.url.replace(/^\/\//, ''))
    if (!fs.existsSync(diskPath)) {
      console.warn(`  ⚠️  asset file missing on disk: ${diskPath}`)
      mediaSkipped++
      continue
    }
    const altEn =
      at<string>(asset.fields.title, 'en') ??
      at<string>(asset.fields.description, 'en') ??
      file.fileName
    const created = await payload.create({
      collection: 'media',
      filePath: diskPath,
      data: { alt: altEn },
      locale: 'en',
    })
    const altDe = asset.fields.title?.de ?? asset.fields.description?.de
    if (altDe && altDe !== altEn) {
      await payload.update({
        collection: 'media',
        id: created.id,
        data: { alt: altDe },
        locale: 'de',
      })
    }
    assetIdToMediaId.set(asset.sys.id, created.id)
    mediaCreated++
  }
  console.info(`🖼️  media: created ${mediaCreated}, skipped ${mediaSkipped}`)

  // ---- Pass 2: Content (time / event / person) -----------------------------
  const entryIdToDocId = new Map<string, { collection: ContentCollection; id: number }>()
  const counts: Record<ContentCollection, number> = {
    time: 0,
    event: 0,
    person: 0,
  }

  const imageIdFor = (field: CFLocalized<unknown> | undefined) => {
    const id = linkId(at(field, defaultLocale))
    if (!id) return undefined
    return assetIdToMediaId.get(id)
  }

  for (const entry of exportData.entries) {
    const type = entry.sys.contentType.sys.id
    if (type !== 'time' && type !== 'event' && type !== 'person') continue
    const f = entry.fields

    const nameEn = at<string>(f.name, 'en') ?? ''
    const wolLink = at<string>(f.wolLink, 'en') ?? undefined
    const contentEn = richTextToLexical(at(f.richText, 'en'))
    const image = imageIdFor(f.image)
    const shared = {
      ...(image ? { image } : {}),
      ...(contentEn ? { content: contentEn } : {}),
      ...(wolLink ? { wolLink } : {}),
    }

    // German overrides for the localized fields (name, content).
    const nameDe = (f.name?.de as string | undefined) || undefined
    const contentDe = richTextToLexical(f.richText?.de)
    // `name` is required+localized, so the German pass must always carry a valid
    // name. When an entry has German content but no German name, reuse the
    // English one — display falls back to it anyway (localization fallback: true).
    const hasDe = Boolean(nameDe || contentDe)
    const deData = hasDe
      ? {
          name: nameDe ?? nameEn,
          ...(contentDe ? { content: contentDe } : {}),
        }
      : {}

    let createdId: number
    if (type === 'time') {
      const created = await payload.create({
        collection: 'time',
        locale: 'en',
        data: {
          name: nameEn,
          startYear: at<number>(f.startYear, defaultLocale) ?? 0,
          endYear: at<number>(f.endYear, defaultLocale) ?? null,
          ...shared,
        },
      })
      createdId = created.id
      if (hasDe)
        await payload.update({
          collection: 'time',
          id: createdId,
          locale: 'de',
          data: deData,
        })
    } else if (type === 'event') {
      const created = await payload.create({
        collection: 'event',
        locale: 'en',
        data: {
          name: nameEn,
          year: at<number>(f.year, defaultLocale) ?? 0,
          ...shared,
        },
      })
      createdId = created.id
      if (hasDe)
        await payload.update({
          collection: 'event',
          id: createdId,
          locale: 'de',
          data: deData,
        })
    } else {
      const created = await payload.create({
        collection: 'person',
        locale: 'en',
        data: {
          name: nameEn,
          gender: at<string>(f.gender, defaultLocale) === 'female' ? 'female' : 'male',
          startYear: at<number>(f.startYear, defaultLocale) ?? null,
          endYear: at<number>(f.endYear, defaultLocale) ?? null,
          startBlurriness: at<number>(f.startBlurriness, defaultLocale) ?? null,
          endBlurriness: at<number>(f.endBlurriness, defaultLocale) ?? null,
          stillActive: at<boolean>(f.stillActive, defaultLocale) ?? false,
          ...shared,
        },
      })
      createdId = created.id
      if (hasDe)
        await payload.update({
          collection: 'person',
          id: createdId,
          locale: 'de',
          data: deData,
        })
    }

    entryIdToDocId.set(entry.sys.id, { collection: type, id: createdId })
    counts[type]++
    const total = counts.time + counts.event + counts.person
    if (total % 100 === 0) console.info(`  …${total} entries created`)
  }
  console.info(`📚 content: time=${counts.time} event=${counts.event} person=${counts.person}`)

  // ---- Pass 3: Resolve person spouse / children ----------------------------
  let relResolved = 0
  let relUnresolved = 0
  const toDocIds = (field: CFLocalized<unknown> | undefined): number[] => {
    const links = at<unknown[]>(field, defaultLocale) ?? []
    const ids: number[] = []
    for (const link of links) {
      const id = linkId(link)
      const mapped = id ? entryIdToDocId.get(id) : undefined
      if (mapped) ids.push(mapped.id)
      else relUnresolved++
    }
    return ids
  }

  for (const entry of exportData.entries) {
    if (entry.sys.contentType.sys.id !== 'person') continue
    const mapped = entryIdToDocId.get(entry.sys.id)
    if (!mapped) continue
    const spouse = toDocIds(entry.fields.spouse)
    const children = toDocIds(entry.fields.childs)
    if (!spouse.length && !children.length) continue
    await payload.update({
      collection: 'person',
      id: mapped.id,
      data: { spouse, children },
    })
    relResolved++
  }
  console.info(
    `🔗 relationships: updated ${relResolved} persons, ${relUnresolved} unresolved links`,
  )
  if (skippedEmbeds) {
    console.info(`ℹ️  skipped ${skippedEmbeds} embedded asset/entry node(s) in rich text`)
  }

  console.info('✅ Import complete.')
  process.exit(0)
}

main().catch((error: unknown) => {
  console.error('❌ Fatal error:', error)
  process.exit(1)
})
