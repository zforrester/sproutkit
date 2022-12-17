import { Config } from '@stencil/core';
import { reactOutputTarget as react } from '@stencil/react-output-target';

import { sass } from '@stencil/sass';
import { inlineSvg } from 'stencil-inline-svg';

export const config: Config = {
  namespace: 'sproutkit-component-library-core',
  outputTargets: [
    react({
      componentCorePackage: '@sproutkit/component-library-core',
      proxiesFile: '../component-library-react/src/components/stencil-generated/index.ts',
      includeDefineCustomElements: true,
    }),

    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
      generateTypeDeclarations: true,
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
};
