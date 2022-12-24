import { defineConfig } from 'astro/config'
import react from '@astrojs/react'

// https://astro.build/config
import mdx from '@astrojs/mdx'

// https://astro.build/config
export default defineConfig({
  integrations: [react(), mdx()],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "@sproutkit/token-library/scss/library/_index.scss";`,
        },
      },
    },
  },
  markdown: {
    // Can be 'shiki' (default), 'prism' or false to disable highlighting
    syntaxHighlight: 'prism',
  },
})
