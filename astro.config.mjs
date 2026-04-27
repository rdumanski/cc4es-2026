import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

export default defineConfig({
  integrations: [
    tailwind(),
    react(),
  ],
  output: 'static',
  build: {
    assets: 'assets',
  },

  // Vite dev-server config — allowedHosts: true wyłącza sprawdzanie hosta (czas testów)
  vite: {
    server: {
      allowedHosts: true,
    },
  },
});
