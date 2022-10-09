import path from 'node:path'

import xo from 'xo'

import config from '../index.cjs'

const fixturesPath = path.join('__tests__', '__fixtures__')

async function lintFixture(fixture) {
  const {results} = await xo.lintFiles([fixture], {
    ...config,

    cache: false,
    cwd: fixturesPath,
    space: 2,
    semicolon: false,
  })

  return {
    ...results[0],
    filePath: fixture,
  }
}

export default lintFixture
