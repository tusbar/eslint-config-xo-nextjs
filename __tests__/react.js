const lintFixture = require('../lib/lint-fixture')

describe('react/jsx-closing-bracket-location', () => {
  it('correct', async () => {
    const result = await lintFixture('react/jsx-closing-bracket-location.correct.js')

    expect(result.errorCount).toBe(0)
  })
})

describe('react/jsx-no-duplicate-props', () => {
  it('correct', async () => {
    const result = await lintFixture('react/jsx-no-duplicate-props.correct.js')

    expect(result.errorCount).toBe(0)
  })

  it('incorrect', async () => {
    const result = await lintFixture('react/jsx-no-duplicate-props.incorrect.js')

    expect(result.messages).toHaveLength(1)
    expect(result.messages[0].ruleId).toBe('react/jsx-no-duplicate-props')
    expect(result.messages[0].message).toBe('No duplicate props allowed')
  })
})

describe('react/react-in-jsx-scope', () => {
  it('correct', async () => {
    const result = await lintFixture('react/react-in-jsx-scope.correct.js')

    expect(result.errorCount).toBe(0)
  })

  it('incorrect', async () => {
    const result = await lintFixture('react/react-in-jsx-scope.incorrect.js')

    expect(result.messages).toHaveLength(1)
    expect(result.messages[0].ruleId).toBe('no-unused-vars')
    expect(result.messages[0].message).toBe('\'React\' is defined but never used.')
  })
})

describe('react/style-prop-object', () => {
  // This rule has moved to eslint-config-xo-react:
  // https://github.com/xojs/eslint-config-xo-react/pull/29

  it('correct', async () => {
    const result = await lintFixture('react/style-prop-object.correct.js')

    expect(result.errorCount).toBe(0)
  })

  it('incorrect', async () => {
    const result = await lintFixture('react/style-prop-object.incorrect.js')

    expect(result.messages).toHaveLength(1)
    expect(result.messages[0].ruleId).toBe('react/style-prop-object')
    expect(result.messages[0].message).toBe('Style prop value must be an object')
  })
})
