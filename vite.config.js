import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  base: '/mts-persis-moscow/' ,
  plugins: [vue()],
  resolve: {
    alias: {
      '@':path.resolve(__dirname, './src'),
    },
  },
})
