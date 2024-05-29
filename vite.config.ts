import path from "path"
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc';
import basicSsl from '@vitejs/plugin-basic-ssl';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/tg_app/',
  plugins: [react(), basicSsl()],
  build: {
    outDir: './docs'
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    watch: {
      usePolling: true
    }
  }
})
