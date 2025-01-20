import { defineConfig } from 'vite'
import solid from 'vite-plugin-solid'

export default defineConfig({
  plugins: [solid()],
  server: {
    proxy: {
      "/api": {
        target: "https://isaacscolors.io",
        changeOrigin: true,
      },
    },
  },
})
