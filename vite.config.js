// vite.config.js

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // Makes it possible to use '@' as an alias for the 'src' directory
    },
  },
  define: {
    'process.env': {}, // Define process.env to avoid ReferenceError
  },
});
