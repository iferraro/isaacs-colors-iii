import { defineConfig } from 'vite'
import solid from 'vite-plugin-solid'
import process from "node:process";

export default defineConfig({
  plugins: [solid()],
  server: {
    proxy: {
      "/api": {
        target: process.env.VITE_API_URL,
        changeOrigin: true,
      },
    },
  },
})
