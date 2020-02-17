const fs = require('fs')
const childProcess = require('child_process')
const util = require('util')
const exec = util.promisify(childProcess.exec)
const readFile = util.promisify(fs.readFile)

const OUTPUT_CSS_PATH = 'test/dist/test.css'

describe('postcss-amp-custom', () => {
  beforeAll(async () => {
    await exec(`npx del-cli ${OUTPUT_CSS_PATH}`)
    await exec('cd test && npx postcss src/test.css -o dist/test.css')
  })

  test('.optimize(cssSource) is success', async () => {
    const successOutput = await readFile(OUTPUT_CSS_PATH).toString()
    expect(typeof successOutput).toBe('string')
  })
})
