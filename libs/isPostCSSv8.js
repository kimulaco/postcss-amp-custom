const isPostCSSv8 = (postcss) => {
  return postcss.Root !== 'undefined'
}

module.exports = isPostCSSv8
