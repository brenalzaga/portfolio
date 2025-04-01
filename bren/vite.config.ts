import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ command, mode }) => ({
  server: {
    host: "0.0.0.0",
    port: Number(process.env.PORT) || 3000,
    strictPort: true,
    allowedHosts: [
      'brenalzaga.onrender.com', 
      'localhost' 
    ]
  },
  preview: {
    host: "0.0.0.0",
    port: Number(process.env.PORT) || 3000,
    strictPort: true,
    allowedHosts: [
      'brenalzaga.onrender.com', 
      'localhost'
    ]
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
    exclude: ['lovable-tagger']
  }
}));