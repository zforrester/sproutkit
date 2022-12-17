import { defineConfig } from 'astro/config'
import react from '@astrojs/react'

// https://astro.build/config
export default defineConfig({
  integrations: [react()],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "@sproutkit/token-library/scss/library/_index.scss";`,
        },
      },
    },
  },
})
