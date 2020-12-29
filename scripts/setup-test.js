const path = require('path')
const fs = require('fs').promises
const util = require('util')
const childProcess = require('child_process')
const exec = util.promisify(childProcess.exec)
const targetDir = process.argv[2]

const main = async () => {
  try {
    if (!targetDir) {
      throw new Error(
        'targetDir is required.\n' +
        'node scripts/setup-test.js targetDir\n'
      )
    }

    const targetAbsDir = path.join(process.cwd(), targetDir)
    const fixtures = await fs.readdir(targetAbsDir)
    const jobs = []

    for (const fixtureName of fixtures) {
      const fixtureDir = path.join(targetAbsDir, fixtureName)
      jobs.push(exec(`cd ${fixtureDir} && npm install`))
    }

    console.log('Installing test packages.')
    await Promise.all(jobs)
    console.log('Finish installing test packages.')
  } catch (error) {
    console.error(error)
    process.exit(-1)
  }
}

main()
