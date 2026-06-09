import eslint from '@eslint/js';
import nextPlugin from '@next/eslint-plugin-next';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import reactHooks from 'eslint-plugin-react-hooks';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  {
    ignores: [
      'node_modules/**',
      '.next/**',
      'out/**',
      'build/**',
      'dist/**',
      'storybook-static/**',
      '.vercel/**',
      'public/**',
      '.claude/**',
      '**/*.d.ts',
      'next-env.d.ts',
      'src/@types/generated/**',
    ],
  },
  eslint.configs.recommended,
  // Type-aware rules. Requires `projectService` below.
  tseslint.configs.recommendedTypeChecked,
  // Accessibility — full strict set (html-has-lang, control-has-associated-label, etc.).
  jsxA11y.flatConfigs.strict,
  // Prettier integration: report formatting as lint errors and turn off ESLint rules that
  // conflict with Prettier. Keep this near the end so it wins formatting conflicts.
  eslintPluginPrettierRecommended,
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.mts', '**/*.cts'],
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
        sourceType: 'module',
      },
    },
    plugins: {
      'simple-import-sort': simpleImportSort,
      'react-hooks': reactHooks,
      '@next/next': nextPlugin,
    },
    rules: {
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs['core-web-vitals'].rules,
      ...reactHooks.configs.recommended.rules,
      // react-hooks v7's compiler-driven rule fires on legitimate hydration / media-query
      // patterns — keep it as a warning, not an error.
      'react-hooks/set-state-in-effect': 'warn',
    },
  },
  // Plain JS/config files can't be type-checked — opt them out.
  {
    files: ['**/*.js', '**/*.mjs', '**/*.cjs'],
    extends: [tseslint.configs.disableTypeChecked],
  },
);
