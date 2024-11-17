import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import svelte from "@astrojs/svelte";
import tailwind from "@astrojs/tailwind";
import partytown from "@astrojs/partytown";
import node from '@astrojs/node'; // Node.js SSR アダプターを追加

// https://astro.build/config
export default defineConfig({
  site: 'https://daily.corleonis.net/',
  output: 'hybrid', // ハイブリッドモードに変更 (SSG + SSR)
  integrations: [
    mdx(),
    sitemap(),
    svelte(),
    tailwind(),
    partytown({
      config: {
        forward: ["dataLayer.push"],
      },
    }),
  ],
  adapter: node({ mode: 'standalone' }), // Node.js用アダプター
});