import { defineConfig } from 'vite'
import solid from 'vite-plugin-solid'
import "jsr:@std/dotenv/load";

export default defineConfig({
  plugins: [solid()],
  server: {
    proxy: {
      "/api": {
        // deno-lint-ignore no-process-globals
        target: process.env.VITE_API_URL,
        changeOrigin: true,
      },
    },
  },
})
