const AmpCustom = require('amp-custom')
const ampCustom = new AmpCustom()

const compileAmpCustom = (root, postcss, option = {}) => {
  const style = ampCustom.optimize(root.toString())

  if (
    option.enableByteLimit &&
    ampCustom.isOverMaxByte(style)
  ) {
    throw new Error('AMP stylesheet exceeds the 75KB limit.')
  }

  return postcss.parse(style)
}

module.exports = compileAmpCustom
