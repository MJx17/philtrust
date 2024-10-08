import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    hmr: true
  },
  base: '/philtrust/',
 plugins: [
    react({
      fastRefresh: true, // Ensure Fast Refresh is enabled
    }),
  ],
})
