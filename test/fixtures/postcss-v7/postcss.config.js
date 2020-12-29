const ampCustom = require('../../../index')

module.exports = () => ({
  plugins: [
    ampCustom({
      enableByteLimit: true
    })
  ]
})
