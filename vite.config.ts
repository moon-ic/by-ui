import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './packages')
    }
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    lib: {
      entry: path.resolve(__dirname, 'packages/index.ts'),
      name: 'MyLib',
      formats: ['es', 'umd'],
      fileName: (format) => `my-lib.${format}.js`
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    }
  },
  server: {
    open: './demos/index.html'
  }
})
