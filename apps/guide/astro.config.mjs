import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          // path to your scss variables
          additionalData: `@import "@sproutkit/token-library/scss/library/_index.scss";`,
        },
      },
    },
  },
})
