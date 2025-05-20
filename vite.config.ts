import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': '/packages'
    }
  },
  build: {
    rollupOptions: {
      input: './demos/index.ts' // Ensure entry file is TS
    }
  }
})
