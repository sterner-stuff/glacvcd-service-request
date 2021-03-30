module.exports = {
    devServer: {
        host: 'glacvcdsr.test'
    },
    chainWebpack: config => {
        config.module
          .rule('images')
            .use('url-loader')
              .loader('url-loader')
              .tap(options => Object.assign(options, { limit: Infinity }))
      }
}