const path = require('path')

module.exports = {
    chainWebpack: config => {
        const apiClient = process.env.VUE_APP_API_CLIENT // mock or server
        config.resolve.alias.set(
            'api-client',
            path.resolve(__dirname, `src/api/${apiClient}`)
        )

        if (process.env.NODE_ENV === 'development') {
            config.output.filename('[name].[hash].js').end()
        }

        const types = ['vue']
        types.forEach(type =>
            addStyleResource(config.module.rule('scss').oneOf(type))
        )
    },
}

function addStyleResource(rule) {
    rule.use('style-resource')
        .loader('style-resources-loader')
        .options({
            patterns: [
                path.resolve(__dirname, './src/assets/styles/main.scss'),
            ],
        })
}
