import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [react()],
  // Use / for dev and Vercel, /Portfolio/ only for GitHub Pages build
  base: '/',
}))

