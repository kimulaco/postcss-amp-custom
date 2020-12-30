const fs = require('fs').promises
const path = require('path')
const postcss = require('postcss')
const postcssAmpCustom = require('../index')
const { RESULT_CSS } = require('./util')
const INPUT_CSS = path.join(__dirname, 'src/test.css')

describe('postcss-amp-custom', () => {
  let inputCss

  beforeAll(async () => {
    inputCss = await fs.readFile(INPUT_CSS)
  })

  test('process', async () => {
    const result = await postcss([postcssAmpCustom]).process(inputCss, {
      from: INPUT_CSS
    })
    expect(result.css).toBe(RESULT_CSS)
  })
})
