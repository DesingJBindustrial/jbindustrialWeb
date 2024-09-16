import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig({
  integrations: [react()],
  devOptions: {
    devToolbar: false,  // Deshabilitar la barra de herramientas de desarrollo
  },
  site: 'https://yellow-goose-362283.hostingersite.com/',
});
