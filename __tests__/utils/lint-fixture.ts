import path from 'node:path'

import xo from 'xo'

const fixturesPath = path.join('__tests__', '__fixtures__')

export async function lintFixture(fixture: string) {
  const {results} = await xo.lintFiles(fixture, {
    cwd: fixturesPath,
    space: 2,
    semicolon: false,
    configPath: '../../src/space.ts',
  })

  return {
    ...results[0],
    filePath: fixture,
  }
}
