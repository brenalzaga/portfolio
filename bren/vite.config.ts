import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig({
  server: {
    port: Number(process.env.PORT) || 3000,
    strictPort: true
  },
  preview: {
    port: Number(process.env.PORT) || 3000,
    strictPort: true
  },
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes('node_modules')) {
            return 'vendor'
          }
        }
      }
    }
  },
  envPrefix: 'VITE_',
  optimizeDeps: { // Added dependency optimization
    include: ['react', 'react-dom', 'axios']
  }
}));