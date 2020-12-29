const fs = require('fs').promises
const path = require('path')
const postcss = require('postcss')
const postcssAmpCustom = require('../../../index')
const pkg = require('./package.json')
const postcssVersion = pkg.devDependencies.postcss.slice(1)

describe('postcss-amp-custom', () => {
  let result

  beforeAll(async () => {
    const inputCss = await fs.readFile(path.join(__dirname, 'src/test.css'))

    result = await postcss([postcssAmpCustom])
      .process(inputCss, {
        from: 'src/app.css',
        to: 'dest/app.css'
      })
  })

  test(`PostCSS version ${postcssVersion}`, () => {
    expect(result.processor.version).toBe(postcssVersion)
  })

  test('process', () => {
    expect(typeof result.css).toBe('string')
  })
})
