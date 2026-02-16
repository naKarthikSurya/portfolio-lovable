import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

const customDomain = "nakarthiksurya.com";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    allowedHosts: [customDomain, `www.${customDomain}`],
    hmr: {
      overlay: false,
    },
  },
  preview: {
    host: "::",
    port: 4173,
    allowedHosts: [customDomain, `www.${customDomain}`],
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
