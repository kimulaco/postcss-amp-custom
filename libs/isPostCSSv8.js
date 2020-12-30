const isPostCSSv8 = (postcss) => {
  return typeof postcss.Root !== 'undefined'
}

module.exports = isPostCSSv8
