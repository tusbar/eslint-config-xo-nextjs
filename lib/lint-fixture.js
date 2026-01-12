import path from 'node:path'

import xo from 'xo'

const fixturesPath = path.join('__tests__', '__fixtures__')

async function lintFixture(fixture) {
  const {results} = await xo.lintFiles(fixture, {
    cwd: fixturesPath,
    cache: false,
    space: 2,
    semicolon: false,
    configPath: '../../index.js',
  })

  return {
    ...results[0],
    filePath: fixture,
  }
}

export default lintFixture
