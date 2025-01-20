import { defineConfig } from 'vite'
import solid from 'vite-plugin-solid'
import process from "node:process";
import "jsr:@std/dotenv/load";

console.log("VITE_API_URL ->", process.env.VITE_API_URL);

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
