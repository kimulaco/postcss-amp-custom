const fs = require('fs').promises
const path = require('path')
const postcss = require('postcss')
const postcssAmpCustom = require('../index')
const { RESULT_CSS } = require('./util')

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

  test('process', () => {
    expect(result.css).toBe(RESULT_CSS)
  })
})
