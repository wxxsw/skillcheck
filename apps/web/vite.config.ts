import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: process.env.SKILLCHECK_BASE ?? "/",
  plugins: [react()],
  build: {
    sourcemap: true
  }
});
