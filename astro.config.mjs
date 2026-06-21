// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://dobesdaniel.github.io',
  base: '/cookbook',
  trailingSlash: 'always',
  devToolbar: {
    enabled: false,
  },
});
