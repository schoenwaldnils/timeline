# Graph Report - .  (2026-06-10)

## Corpus Check
- Large corpus: 447 files · ~730,655 words. Semantic extraction will be expensive (many Claude tokens). Consider running on a subfolder.

## Summary
- 825 nodes · 1177 edges · 53 communities (42 shown, 11 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 19 edges (avg confidence: 0.89)
- Token cost: 64,591 input · 0 output

## Community Hubs (Navigation)
- [[_COMMUNITY_Content Rendering Components|Content Rendering Components]]
- [[_COMMUNITY_UI Primitives & Filter|UI Primitives & Filter]]
- [[_COMMUNITY_Timeline Scale Store|Timeline Scale Store]]
- [[_COMMUNITY_Favicon Generation Config|Favicon Generation Config]]
- [[_COMMUNITY_Sidebar & Event Interaction|Sidebar & Event Interaction]]
- [[_COMMUNITY_Dev Dependencies & Linting|Dev Dependencies & Linting]]
- [[_COMMUNITY_Contentful Data Fetching|Contentful Data Fetching]]
- [[_COMMUNITY_Runtime Dependencies|Runtime Dependencies]]
- [[_COMMUNITY_Buttons & Global Store|Buttons & Global Store]]
- [[_COMMUNITY_German Translations|German Translations]]
- [[_COMMUNITY_English Translations|English Translations]]
- [[_COMMUNITY_App Routing & LangSwitch|App Routing & LangSwitch]]
- [[_COMMUNITY_NPM Scripts|NPM Scripts]]
- [[_COMMUNITY_TypeScript Config|TypeScript Config]]
- [[_COMMUNITY_Payload Generated Types|Payload Generated Types]]
- [[_COMMUNITY_Algolia Indexing & Collection Config|Algolia Indexing & Collection Config]]
- [[_COMMUNITY_Payload Config Core|Payload Config Core]]
- [[_COMMUNITY_Scroll Store & Config|Scroll Store & Config]]
- [[_COMMUNITY_Favicon Data|Favicon Data]]
- [[_COMMUNITY_Package Manifest|Package Manifest]]
- [[_COMMUNITY_Project Architecture & Migration|Project Architecture & Migration]]
- [[_COMMUNITY_Remark Markdown Config|Remark Markdown Config]]
- [[_COMMUNITY_Contentful Import Script|Contentful Import Script]]
- [[_COMMUNITY_Storage Utilities|Storage Utilities]]
- [[_COMMUNITY_MediaUser Collections Config|Media/User Collections Config]]
- [[_COMMUNITY_Color Theme|Color Theme]]
- [[_COMMUNITY_Webpack & Next Config|Webpack & Next Config]]
- [[_COMMUNITY_Person Collection & Validation|Person Collection & Validation]]
- [[_COMMUNITY_Contentful Export Config|Contentful Export Config]]
- [[_COMMUNITY_Loading Component|Loading Component]]
- [[_COMMUNITY_Next Image Types|Next Image Types]]
- [[_COMMUNITY_Search Component Assets|Search Component Assets]]
- [[_COMMUNITY_Type Reset Utilities|Type Reset Utilities]]
- [[_COMMUNITY_Viewport Definitions|Viewport Definitions]]
- [[_COMMUNITY_i18n Configuration|i18n Configuration]]
- [[_COMMUNITY_Root Layout|Root Layout]]
- [[_COMMUNITY_LangSwitch Assets|LangSwitch Assets]]
- [[_COMMUNITY_Database Config|Database Config]]
- [[_COMMUNITY_Author Metadata|Author Metadata]]
- [[_COMMUNITY_Lint-staged Config|Lint-staged Config]]
- [[_COMMUNITY_SVGR Type Declarations|SVGR Type Declarations]]
- [[_COMMUNITY_Vercel Project IDs|Vercel Project IDs]]
- [[_COMMUNITY_Filter Component Asset|Filter Component Asset]]
- [[_COMMUNITY_Home E2E Test|Home E2E Test]]
- [[_COMMUNITY_ESLint Config|ESLint Config]]
- [[_COMMUNITY_Scroll Types|Scroll Types]]

## God Nodes (most connected - your core abstractions)
1. `scripts` - 25 edges
2. `compilerOptions` - 17 edges
3. `ui` - 15 edges
4. `ui` - 14 edges
5. `useSidebarStore` - 11 edges
6. `useStore` - 11 edges
7. `time` - 11 edges
8. `time` - 11 edges
9. `settings` - 10 edges
10. `Locale` - 10 edges

## Surprising Connections (you probably didn't know these)
- `Timeline Project` --conceptually_related_to--> `Vercel Project Link (.vercel folder)`  [INFERRED]
  readme.md → .vercel/README.txt
- `Timeline Project` --references--> `Postgres Service (docker-compose)`  [INFERRED]
  readme.md → docker-compose.yml
- `Postgres Service (docker-compose)` --conceptually_related_to--> `PostgreSQL Content Store`  [INFERRED]
  docker-compose.yml → readme.md
- `main()` --calls--> `getAlgoliaClient()`  [EXTRACTED]
  scripts/reindex-algolia.ts → src/collections/hooks/algolia.ts
- `Language Switch Icon (letter A with speech bubble)` --semantically_similar_to--> `Language Icon (translation/speech bubble)`  [INFERRED] [semantically similar]
  src/components/LangSwitch/langIcon.svg → src/components/LangSwitch/languageIcon.svg

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Timeline Tech Stack** — readme_payload_cms, readme_nextjs, readme_algolia_search, readme_postgresql_content_store [EXTRACTED 1.00]
- **Contentful to Payload Migration Flow** — readme_contentful_migration, readme_payload_cms, readme_reindex_algolia_script, readme_migration_status_doc [EXTRACTED 0.90]

## Communities (53 total, 11 thin omitted)

### Community 0 - "Content Rendering Components"
Cohesion: 0.07
Nodes (28): AdminLink(), AdminLinkProps, ContentEvent(), ContentfulLinkProps, LinkToWOL(), ContentPerson(), ContentTemplate(), ContentTemplateProps (+20 more)

### Community 1 - "UI Primitives & Filter"
Cohesion: 0.06
Nodes (27): ClickAwayListener(), Events, FocusEvents, MouseEvents, Props, TouchEvents, Logo Component, Filter() (+19 more)

### Community 2 - "Timeline Scale Store"
Cohesion: 0.06
Nodes (25): scales, ScaleStore, useScaleStore, formatTimelineData(), TimelineData, TimelineEventDoc, TimelinePerson, TimelineQueryData (+17 more)

### Community 3 - "Favicon Generation Config"
Cohesion: 0.04
Nodes (45): assets, manifest, pictureAspect, themeColor, declareOnlyDefaultIcon, ios6AndPriorIcons, ios7AndLaterIcons, legacyIcon (+37 more)

### Community 4 - "Sidebar & Event Interaction"
Cohesion: 0.08
Nodes (18): Event(), useMousePosition(), SidebarStore, useSidebarStore, Sidebar(), getTimelineWidth(), TimelineNumbers(), TimelineNumbersProps (+10 more)

### Community 5 - "Dev Dependencies & Linting"
Cohesion: 0.05
Nodes (43): devDependencies, @axe-core/playwright, contentful-cli, @contentful/rich-text-html-renderer, dotenv, dotenv-flow, eslint, eslint-config-prettier (+35 more)

### Community 6 - "Contentful Data Fetching"
Cohesion: 0.10
Nodes (22): ContentfulContent(), useFetchSidebarData(), fetchContentData(), formatEvent(), formatPerson(), formatTime(), ImageData, relImage() (+14 more)

### Community 7 - "Runtime Dependencies"
Cohesion: 0.05
Nodes (40): dependencies, algoliasearch, array-sort, color, @emotion/react, @emotion/styled, @formatjs/intl-localematcher, graphql (+32 more)

### Community 8 - "Buttons & Global Store"
Cohesion: 0.08
Nodes (18): ButtonPlain(), ButtonSquare(), zIndexes, Filter, Store, HighlightResult, HitType, SearchHit() (+10 more)

### Community 9 - "German Translations"
Cohesion: 0.06
Nodes (35): admin-edit, approx, meta-description, relations, child, father, mother, spouse (+27 more)

### Community 10 - "English Translations"
Cohesion: 0.06
Nodes (34): admin-edit, approx, meta-description, relations, child, father, mother, spouse (+26 more)

### Community 11 - "App Routing & LangSwitch"
Cohesion: 0.13
Nodes (11): props, LangSwitchView, LangSwitchViewProps, fetchTimelineData(), metadata, IndexPage(), i18n, Locale (+3 more)

### Community 12 - "NPM Scripts"
Cohesion: 0.08
Nodes (25): scripts, analyze, build, build-storybook, db:down, db:up, dev, export:contentful (+17 more)

### Community 13 - "TypeScript Config"
Cohesion: 0.09
Nodes (22): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+14 more)

### Community 14 - "Payload Generated Types"
Cohesion: 0.11
Nodes (19): Auth, CollectionsWidget, Config, EventSelect, GeneratedTypes, MediaSelect, PayloadKv, PayloadKvSelect (+11 more)

### Community 15 - "Algolia Indexing & Collection Config"
Cohesion: 0.17
Nodes (15): configEvent, configTime, algoliaAfterChange(), algoliaAfterDelete(), AlgoliaRecord, AnyDoc, getAlgoliaClient(), imageUrlOf() (+7 more)

### Community 16 - "Payload Config Core"
Cohesion: 0.15
Nodes (9): main(), db, editor, jobs, localization, dirname, filename, plugins (+1 more)

### Community 17 - "Scroll Store & Config"
Cohesion: 0.17
Nodes (8): useScrollPosition(), ScrollStore, useScrollStore, Config(), ScaleIndicator, Scaling, ThemeSwitch, Page()

### Community 18 - "Favicon Data"
Cohesion: 0.14
Nodes (13): favicon, compression, files_urls, html_code, overlapping_markups, package_url, files_location, path (+5 more)

### Community 19 - "Package Manifest"
Cohesion: 0.15
Nodes (12): description, keywords, license, main, name, packageManager, repository, simple-git-hooks (+4 more)

### Community 20 - "Project Architecture & Migration"
Cohesion: 0.21
Nodes (13): Algolia afterChange/afterDelete Indexing Hooks, Algolia Search, Contentful to Payload Migration, docs/migration-status.md, Neon Pooled Postgres (production), next-intl (en/de localization), Next.js (App Router), Payload CMS (+5 more)

### Community 21 - "Remark Markdown Config"
Cohesion: 0.17
Nodes (11): plugins, settings, bullet, emphasis, fences, listItemIndent, rule, ruleRepetition (+3 more)

### Community 22 - "Contentful Import Script"
Cohesion: 0.18
Nodes (11): CFAsset, CFEntry, CFExport, CFFile, CFLink, CFLocalized, ContentCollection, EXPORT_FILE (+3 more)

### Community 23 - "Storage Utilities"
Cohesion: 0.32
Nodes (8): getLocalStorage(), getSessionStorage(), setLocalStorage(), setSessionStorage(), getUserLocalStorage(), getUserSessionStorage(), setUserLocalStorage(), setUserSessionStorage()

### Community 24 - "Media/User Collections Config"
Cohesion: 0.27
Nodes (6): configMedia, configUser, collections, admin, dirname, filename

### Community 25 - "Color Theme"
Cohesion: 0.33
Nodes (5): colors, shades, Box(), isDark(), themeColors

### Community 26 - "Webpack & Next Config"
Cohesion: 0.22
Nodes (5): svgrOptions, fs, path, sharedConfig, TsconfigPathsPlugin

### Community 28 - "Contentful Export Config"
Cohesion: 0.29
Nodes (6): contentFile, downloadAssets, environmentId, exportDir, includeDrafts, saveFile

### Community 30 - "Next Image Types"
Cohesion: 0.29
Nodes (6): FixedStringImageProps, ObjectImageProps, StaticImageData, StaticImport, StaticRequire, StringImageProps

### Community 31 - "Search Component Assets"
Cohesion: 0.50
Nodes (5): Search Component, Algolia Logo (blue), Algolia Logo (white), Search Default Placeholder Image, Search Icon (magnifying glass)

### Community 32 - "Type Reset Utilities"
Cohesion: 0.40
Nodes (4): Array, NonFalsy, ReadonlyArray, WidenLiteral

### Community 33 - "Viewport Definitions"
Cohesion: 0.40
Nodes (4): ViewportKey, Viewports, viewportsCss, viewportsJs

### Community 36 - "LangSwitch Assets"
Cohesion: 1.00
Nodes (3): LangSwitch Component, Language Switch Icon (letter A with speech bubble), Language Icon (translation/speech bubble)

### Community 38 - "Author Metadata"
Cohesion: 0.67
Nodes (3): author, email, name

### Community 39 - "Lint-staged Config"
Cohesion: 0.67
Nodes (3): lint-staged, !(.changeset/**/*)*.md, *.{ts,tsx,js,mjs,cjs}

## Knowledge Gaps
- **383 isolated node(s):** `bullet`, `emphasis`, `strong`, `strongRepetition`, `fences` (+378 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **11 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `useSidebarStore` connect `Sidebar & Event Interaction` to `Content Rendering Components`, `Buttons & Global Store`?**
  _High betweenness centrality (0.024) - this node is a cross-community bridge._
- **Why does `Person` connect `Algolia Indexing & Collection Config` to `Timeline Scale Store`, `Payload Generated Types`, `Contentful Data Fetching`, `Contentful Import Script`?**
  _High betweenness centrality (0.015) - this node is a cross-community bridge._
- **Why does `devDependencies` connect `Dev Dependencies & Linting` to `Package Manifest`?**
  _High betweenness centrality (0.013) - this node is a cross-community bridge._
- **What connects `bullet`, `emphasis`, `strong` to the rest of the system?**
  _383 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Content Rendering Components` be split into smaller, more focused modules?**
  _Cohesion score 0.06838106370543542 - nodes in this community are weakly interconnected._
- **Should `UI Primitives & Filter` be split into smaller, more focused modules?**
  _Cohesion score 0.05584415584415584 - nodes in this community are weakly interconnected._
- **Should `Timeline Scale Store` be split into smaller, more focused modules?**
  _Cohesion score 0.06095791001451379 - nodes in this community are weakly interconnected._