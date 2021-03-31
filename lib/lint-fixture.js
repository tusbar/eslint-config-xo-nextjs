const path = require('path')
const {lintFiles} = require('xo')

const config = require('..')
const fixturesPath = path.join('__tests__', '__fixtures__')

async function lintFixture(fixture) {
  const {results} = await lintFiles([fixture], {
    ...config,

    cache: false,
    cwd: fixturesPath,
    space: 2,
    semicolon: false
  })

  return {
    ...results[0],
    filePath: fixture
  }
}

module.exports = lintFixture
