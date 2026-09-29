// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react"; // or @vitejs/plugin-react
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    watch: {
      // Force Vite to poll the filesystem every 100ms
      usePolling: true,
      interval: 100,
    },
  },
});
