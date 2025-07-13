// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import icon from "astro-icon";




// https://astro.build/config
export default defineConfig({
  site: "https://streampng.com",
  integrations: [mdx(), sitemap(), icon(), react()],

  vite: {
    plugins: [tailwindcss()],
  },
});