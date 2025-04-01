import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  base: process.env.NODE_ENV === 'production' ? '/' : '/',
  
  server: {
    host: "0.0.0.0", // Required for Render deployment
    port: 8080,
    strictPort: true,
    allowedHosts: [
      'bren-portfolio-w991.onrender.com', // Your Render domain
      'localhost' // Local development
    ]
  },
  preview: {
    port: 3000,
    strictPort: true,
    host: "0.0.0.0" // Required for preview server
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
    outDir: 'dist',
    sourcemap: mode === 'development',
    minify: 'terser', // Added minification
    chunkSizeWarningLimit: 1600,
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom'],
          vendor: ['lodash', 'axios'],
          utils: ['date-fns', 'lodash-es'] // Additional optimization
        }
      }
    }
  },
  envPrefix: 'VITE_',
  optimizeDeps: { // Added dependency optimization
    include: ['react', 'react-dom', 'axios']
  }
}));