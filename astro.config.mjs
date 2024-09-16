import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig({
  integrations: [react()],
  devOptions: {
    devToolbar: false,  // Deshabilitar la barra de herramientas de desarrollo
  },
  site: 'https://darkslategray-newt-419916.hostingersite.com/',
});
