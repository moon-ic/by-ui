// vitest.config.ts
import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  test: {
    environment: 'jsdom',
    globals: true,
    coverage: {
      reporter: ['text', 'json', 'html'],
      include: ['packages/components'],
      exclude: ['node_modules', 'docs'],
      all: true,
    },
  },
  plugins: [vue()],
})
