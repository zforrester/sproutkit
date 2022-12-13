import { Config } from '@stencil/core'

import { sass } from '@stencil/sass'
// import tokens from '@sproutkit/token-library'
import { inlineSvg } from 'stencil-inline-svg'

export const config: Config = {
  namespace: 'component-library',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
  plugins: [
    sass({
      injectGlobalPaths: ['../token-library/scss/library/_index.scss'],
    }),
    inlineSvg(),
  ],
}
