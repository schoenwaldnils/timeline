import { readFileSync } from 'node:fs'

import eslint from '@eslint/js'
import nextPlugin from '@next/eslint-plugin-next'
import type { ESLint } from 'eslint'
import { defineConfig, globalIgnores } from 'eslint/config'
import jsxA11y from 'eslint-plugin-jsx-a11y'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import simpleImportSort from 'eslint-plugin-simple-import-sort'
import type { Options as PrettierOptions } from 'prettier'
import tseslint from 'typescript-eslint'

const production = process.env.NODE_ENV === 'production'

// Load `.prettierrc` explicitly and feed it to the `prettier/prettier` rule.
// Relying on eslint-plugin-prettier's per-file config resolution makes the
// result depend on the runner's cwd/cache: the CLI finds `.prettierrc`, but a
// long-lived IDE ESLint server may fall back to Prettier defaults (`semi: true`)
// and wrongly demand semicolons. Passing the options inline removes that gap.
const prettierOptions = JSON.parse(
  readFileSync(`${import.meta.dirname}/.prettierrc`, 'utf8'),
) as PrettierOptions

export default defineConfig([
  globalIgnores([
    'node_modules/**',
    '**/*.js',
    '**/*.mjs',
    '**/*.mts',
    '.next/**',
    '*.d.ts',
    // '**/*.generated.ts',
    '.next',
    'migrations',
    // 'src/graphql/types.ts',
  ]),
  eslint.configs.recommended,
  tseslint.configs.recommendedTypeChecked,
  // Accessibility: full jsx-a11y strict. Next's bundled config only ships a
  // 6-rule ARIA subset, so it is added explicitly — see
  // ~/.claude/docs/linting-and-formatting.md.
  jsxA11y.flatConfigs.strict,
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
        sourceType: 'module',
      },
    },
    settings: {
      react: { version: 'detect' },
    },
    plugins: {
      react,
      // react-hooks v7 ships nested `configs.flat.*` entries that don't match
      // ESLint's `Plugin` index signature under `defineConfig`'s stricter types,
      // though the runtime shape is a valid plugin.
      'react-hooks': reactHooks as ESLint.Plugin,
      '@next/next': nextPlugin,
      'simple-import-sort': simpleImportSort,
    },
    rules: {
      // Next.js framework + Core Web Vitals rules (next lint was removed in v16).
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs['core-web-vitals'].rules,
      // Rules of Hooks + exhaustive-deps.
      ...reactHooks.configs.recommended.rules,
      // react-hooks v7's compiler-driven perf hint is opinionated and fires on
      // legitimate hydration/media-query patterns — keep it as a warning.
      'react-hooks/set-state-in-effect': 'warn',
      // A <label> wrapping our Radix-based <Checkbox> is a valid association.
      'jsx-a11y/label-has-associated-control': ['error', { controlComponents: ['Checkbox'] }],
      'no-console': [production ? 2 : 1, { allow: ['error', 'warn', 'info'] }],
      'no-unused-vars': ['warn', { args: 'none' }],
      '@typescript-eslint/ban-ts-comment': 'warn',
      '@typescript-eslint/no-unused-vars': 'off', // handled by configs.recommended
      '@typescript-eslint/no-empty-object-type': 'warn',
      '@typescript-eslint/no-empty-function': 'off',
      '@typescript-eslint/no-explicit-any': 'warn',
      'no-prototype-builtins': 'off',
      // Import/export sorting.
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
      'react/jsx-curly-brace-presence': ['warn', { props: 'never', children: 'never' }],
      'react/self-closing-comp': 'warn',
    },
  },
  {
    // Vendored shadcn/Radix primitives: label/anchor semantics are supplied by
    // the components that consume them, not the primitive definitions.
    files: ['src/components/ui/**'],
    rules: {
      'jsx-a11y/label-has-associated-control': 'off',
      'jsx-a11y/anchor-has-content': 'off',
    },
  },
  // Prettier last so it disables conflicting formatting rules from the configs
  // above and lets `.prettierrc` (e.g. `semi: false`) win.
  eslintPluginPrettierRecommended,
  {
    rules: {
      'prettier/prettier': ['error', prettierOptions],
    },
  },
])
