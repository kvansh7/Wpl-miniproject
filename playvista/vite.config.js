import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['slick-carousel/slick/fonts/slick.ttf', 'slick-carousel/slick/fonts/slick.woff']
  }
})
