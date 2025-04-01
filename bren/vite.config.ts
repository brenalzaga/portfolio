import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  // Production base path configuration
  base: process.env.NODE_ENV === 'production' ? '/' : '/',
  
  server: {
    host: "::",
    port: 8080,
    // Added for Render compatibility
    strictPort: true
  },
  preview: {
    port: 3000, // Match Render's expected port
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
  // Build optimization for Render
  build: {
    outDir: 'dist',
    sourcemap: mode === 'development',
    chunkSizeWarningLimit: 1600,
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom'],
          vendor: ['lodash', 'axios']
        }
      }
    }
  },
  // Environment variables prefix
  envPrefix: 'VITE_'
}));