import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/wave-clone/',
  plugins: [vue()],
  resolve: {
    alias: {
      // "@" pointe vers le dossier src/ → on écrit @/components/... partout
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
