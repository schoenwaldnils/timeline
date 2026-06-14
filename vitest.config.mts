import react from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [react()],
  // Vite resolves the `@/*` tsconfig paths natively — no vite-tsconfig-paths plugin needed.
  resolve: { tsconfigPaths: true },
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./vitest.setup.ts'],
    include: ['tests/unit/**/*.{test,spec}.ts', 'tests/unit/**/*.{test,spec}.tsx'],
  },
});
