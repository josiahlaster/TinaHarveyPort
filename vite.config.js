import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Use repo subpath in production (GitHub Pages) but root for local dev.
  base: process.env.NODE_ENV === 'production' ? '/TinaHarveyPort/' : '/',
})
