import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Allows external access by binding to 0.0.0.0
    port: 5173, // Specify the port (default is 5173)
  },
})
