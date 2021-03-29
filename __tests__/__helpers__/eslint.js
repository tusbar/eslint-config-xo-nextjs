const path = require('path')
const {lintFiles, lintText} = require('xo')

async function lintStatement(statement) {
  const {results} = await lintText(statement)

  return results[0]
}

async function lintFixture(fixture) {
  const filePath = path.join('__tests__', '__fixtures__', fixture)

  const {results} = await lintFiles([filePath])

  return {
    ...results[0],
    filePath: fixture
  }
}

module.exports = {lintStatement, lintFixture}
