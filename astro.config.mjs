// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import icon from "astro-icon";
import { SITE } from './src/config/site.consts';





// https://astro.build/config
export default defineConfig({
  site: SITE,
  integrations: [mdx(), sitemap(), icon(), react()],

  vite: {
    plugins: [tailwindcss()],
  },
});