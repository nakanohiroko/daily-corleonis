import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import svelte from "@astrojs/svelte";
import tailwind from "@astrojs/tailwind";
import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  site: 'https://daily.corleonis.net/',
  integrations: [mdx(), sitemap(), svelte(), tailwind(),partytown({
    // Adds dataLayer.push as a forwarding-event.
    config: {
      forward: ["dataLayer.push"],
    },
  }),
  ],
});