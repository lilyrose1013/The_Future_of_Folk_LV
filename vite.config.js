import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/The_Future_of_Folk_LV/',
  server: {
    port: 3000,
    open: true
  },
  assetsInclude: ['**/*.pdf']
})
