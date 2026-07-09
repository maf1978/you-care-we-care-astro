// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://youcarewecaretreeservice.com',
  trailingSlash: 'always',
  compressHTML: true,
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    sitemap({
      filter: (page) =>
        !page.includes('/privacy') &&
        !page.includes('/terms') &&
        !page.includes('/404'),
      changefreq: 'weekly',
      priority: 0.7,
      serialize(item) {
        if (item.url === 'https://youcarewecaretreeservice.com/') {
          item.priority = 1.0;
          item.changefreq = 'daily';
        } else if (item.url.includes('/services/')) {
          item.priority = 0.9;
        } else if (item.url.includes('/areas/')) {
          item.priority = 0.85;
        } else if (
          item.url.includes('/pricing/') ||
          item.url.includes('/compare/') ||
          item.url.includes('/problems/')
        ) {
          item.priority = 0.8;
        }
        return item;
      },
    }),
  ],
});
