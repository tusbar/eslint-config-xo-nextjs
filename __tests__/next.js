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
