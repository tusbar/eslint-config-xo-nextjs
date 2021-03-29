const {lintStatement, lintFixture} = require('./__helpers__/eslint')

describe('index', () => {
  it('should fail if react is in scope and not needed', async () => {
    const result = await lintFixture('react-in-scope.jsx')
    expect(result.messages[0].ruleId).toBe('no-unused-vars')
    expect(result).toMatchSnapshot()
  })

  it('should not require react to be in scope for using JSX', async () => {
    const result = await lintFixture('react-not-in-scope.jsx')
    expect(result.errorCount).toBe(0)
    expect(result).toMatchSnapshot()
  })

  it('should generate error messages', async () => {
    const result = await lintStatement(
      'var React = require(\'react\')\nvar el = <div />'
    )

    expect(result).toMatchSnapshot()
  })
})
