import { Config } from '@stencil/core'
import { sass } from '@stencil/sass'

export const config: Config = {
    namespace: 'fission-kit-guide',
    taskQueue: 'async',
    outputTargets: [
        {
            type: 'dist',
            esmLoaderPath: '../loader',
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
            injectGlobalPaths: ['src/globals/scss/library/_library.scss'],
        }),
    ],
}
