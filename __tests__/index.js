const lintFixture = require('../lib/lint-fixture')

describe('jsx-quotes', () => {
  it('correct', async () => {
    const result = await lintFixture('jsx-quotes.correct.js')

    expect(result.errorCount).toBe(0)
    expect(result).toMatchSnapshot()
  })
})

describe('react/jsx-closing-bracket-location', () => {
  it('correct', async () => {
    const result = await lintFixture('react/jsx-closing-bracket-location.correct.js')

    expect(result.errorCount).toBe(0)
    expect(result).toMatchSnapshot()
  })
})

describe('react/react-in-jsx-scope', () => {
  it('correct', async () => {
    const result = await lintFixture('react/react-in-jsx-scope.correct.js')

    expect(result.errorCount).toBe(0)
    expect(result).toMatchSnapshot()
  })

  it('incorrect', async () => {
    const result = await lintFixture('react/react-in-jsx-scope.incorrect.js')

    expect(result.messages[0].message).toBe('\'React\' is defined but never used.')
    expect(result).toMatchSnapshot()
  })
})
