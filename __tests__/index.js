const lintFixture = require('../lib/lint-fixture.js')

describe('jsx-quotes', () => {
  it('correct', async () => {
    const result = await lintFixture('jsx-quotes.correct.js')

    expect(result.errorCount).toBe(0)
  })

  it('incorrect', async () => {
    const result = await lintFixture('jsx-quotes.incorrect.js')

    expect(result.messages).toHaveLength(1)
    expect(result.messages[0].ruleId).toBe('jsx-quotes')
    expect(result.messages[0].message).toBe('Unexpected usage of doublequote.')
  })
})
