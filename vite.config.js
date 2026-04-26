import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  // Use './' to ensure all scripts and styles load relative to the current folder
  base: '/my-website/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    // This helps the browser console show exactly where errors are happening
    sourcemap: true 
  }
})
