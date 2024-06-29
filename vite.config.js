import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@components": "/src/User/components",
      "@image": "/src/assets/img",
      "@assets": "/src/assets/css",
      "@assets_js": "/src/assets/js",
      "@Home": "/src/User/components/Home",
      "@Vehicle": "/src/User/components/Pages/WheelerDetails",
      "@Admin" : "/src/Admin"
    },
  },
  plugins: [react()],
});
