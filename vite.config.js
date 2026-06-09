import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [vue()],
  // GitHub Pages project site path. Keep "/" in dev, use repo name in build.
  base: command === 'build' ? '/wave-clone/' : '/',
  resolve: {
    alias: {
      // "@" pointe vers le dossier src/ → on écrit @/components/... partout
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
}))
