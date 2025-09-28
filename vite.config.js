// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";
import { fileURLToPath } from "node:url";

// __dirname 대체 (ESM)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), // ← @ /src 매핑
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        // 전역으로 지정해서 import 각각 안쓸 수 있게
        additionalData: `
          @use "@/assets/scss/_typography" as *;
        `,
      },
    },
  },
});
