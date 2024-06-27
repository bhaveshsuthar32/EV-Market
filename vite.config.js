import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@components": "/src/components",
      "@image": "/src/assets/img",
      "@assets": "/src/assets/css",
      "@assets_js": "/src/assets/js",
      "@Home": "/src/components/Home",
    },
  },
  plugins: [react()],
});
