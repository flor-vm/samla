import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  rewrites: [{ source: '/(.*)', destination: '/' }],
  plugins: [react()],
  css: {
    modules: {
      localsConvention: 'camelCase',
    },
  },
});
