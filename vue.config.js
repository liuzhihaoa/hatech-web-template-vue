const Path = require('path')
const { SvgChainConfig } = require('hatech-web-component-icon/src/utils')

const mockApiUrl = 'http://localhost:6666'

/**
 * 设置绝对路径
 * @param {String} dir 路径
 */
function resolve(dir) {
  return Path.join(__dirname, dir)
}

module.exports = {
  devServer: {
    port: 9190,
    proxy: {
      '/api': {
        target: mockApiUrl,
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/': '/'
        }
      }
    }
  },
  chainWebpack: config => {
    config.resolve.alias.set('@', resolve('./src'))
    SvgChainConfig(config, {
      path: 'src/assets/icons'
    })
  }
}