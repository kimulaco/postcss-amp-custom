const postcss = require('postcss')
const compileAmpCustom = require('./libs/compileAmpCustom')
const isPostCSSv8 = require('./libs/isPostCSSv8')
const PLUGIN_NAME = 'postcss-amp-custom'

module.exports = (option = {}) => {
  option = Object.assign({
    enableByteLimit: false
  }, option || {})

  if (isPostCSSv8(postcss)) {
    return {
      postcssPlugin: PLUGIN_NAME,
      Root (root, postcss) {
        postcss.result.root = compileAmpCustom(root, postcss, option)
      }
    }
  } else {
    return postcss.plugin(PLUGIN_NAME, (option) => {
      return (root, result) => {
        return new Promise((resolve, reject) => {
          try {
            const postcss = require('postcss')
            const style = compileAmpCustom(root, postcss, option)
            result.root = postcss.parse(style)
            resolve()
          } catch (error) {
            reject(error)
          }
        })
      }
    })
  }
}

module.exports.postcss = true
