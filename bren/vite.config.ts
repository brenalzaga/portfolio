import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ command, mode }) => ({
  server: {
    port: Number(process.env.PORT) || 3000,
    strictPort: true,
    host: '0.0.0.0' // Needed for Render's external access
  },
  preview: {
    port: Number(process.env.PORT) || 3000,
    strictPort: true,
    host: true
  },
  plugins: [
    react(),
    mode === 'development' && componentTagger(), // Now properly scoped
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes('node_modules')) {
            return id.toString().split('node_modules/')[1].split('/')[0];
          }
        }
      }
    }
  },
  envPrefix: 'VITE_',
  optimizeDeps: {
    include: ['react', 'react-dom', 'axios'],
    exclude: ['lovable-tagger'] // Exclude dev-only dependency
  }
}));