const lintFixture = require('../lib/lint-fixture')

describe('@next/next/no-css-tags', () => {
  it('correct', async () => {
    const result = await lintFixture('@next/next/no-css-tags.correct.js')

    expect(result.errorCount).toBe(0)
  })

  it('incorrect', async () => {
    const result = await lintFixture('@next/next/no-css-tags.incorrect.js')

    expect(result.messages).toHaveLength(1)
    expect(result.messages[0].ruleId).toBe('@next/next/no-css-tags')
    expect(result.messages[0].message).toBe('In order to use external stylesheets use @import in the root stylesheet compiled with NextJS. This ensures proper priority to CSS when loading a webpage.')
  })
})

describe('@next/next/no-sync-scripts', () => {
  it('correct', async () => {
    const result = await lintFixture('@next/next/no-sync-scripts.correct.js')

    expect(result.errorCount).toBe(0)
  })

  it('incorrect', async () => {
    const result = await lintFixture('@next/next/no-sync-scripts.incorrect.js')

    expect(result.messages).toHaveLength(1)
    expect(result.messages[0].ruleId).toBe('@next/next/no-sync-scripts')
    expect(result.messages[0].message).toBe('A synchronous script tag can impact your webpage\'s performance')
  })
})

describe('@next/next/no-unwanted-polyfillio', () => {
  it('correct', async () => {
    const result = await lintFixture('@next/next/no-unwanted-polyfillio.correct.js')

    expect(result.errorCount).toBe(0)
  })

  it('incorrect', async () => {
    const result = await lintFixture('@next/next/no-unwanted-polyfillio.incorrect.js')

    expect(result.messages).toHaveLength(1)
    expect(result.messages[0].ruleId).toBe('@next/next/no-unwanted-polyfillio')
    expect(result.messages[0].message).toBe('You\'re requesting polyfills from polyfill.io which are already shipped with NextJS. Please remove es2019 from the features list.')
  })
})
