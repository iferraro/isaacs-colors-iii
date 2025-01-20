import { defineConfig } from 'vite'
import solid from 'vite-plugin-solid'
import "jsr:@std/dotenv/load";

export default defineConfig({
  plugins: [solid()],
  server: {
    proxy: {
      "/api": {
        target: Deno.env.get("VITE_API_URL"),
        changeOrigin: true,
      },
    },
  },
})
