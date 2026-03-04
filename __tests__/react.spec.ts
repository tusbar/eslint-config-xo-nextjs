import {lintFixture} from './utils/lint-fixture.js'

describe('react/function-component-definition', () => {
  it('correct', async () => {
    const result = await lintFixture('react/function-component-definition.correct.js')

    expect(result.errorCount).toBe(0)
  })

  it('incorrect', async () => {
    const result = await lintFixture('react/function-component-definition.incorrect.js')

    expect(result.messages).toHaveLength(1)
    expect(result.messages[0].ruleId).toBe('react/function-component-definition')
    expect(result.messages[0].message).toBe('Function component is not an arrow function')
  })
})

describe('react/jsx-closing-bracket-location', () => {
  it('correct', async () => {
    const result = await lintFixture('react/jsx-closing-bracket-location.correct.js')

    expect(result.errorCount).toBe(0)
  })

  it('incorrect', async () => {
    const result = await lintFixture('react/jsx-closing-bracket-location.incorrect.js')

    expect(result.messages).toHaveLength(1)
    expect(result.messages[0].ruleId).toBe('react/jsx-closing-bracket-location')
    expect(result.messages[0].message).toBe(
      'The closing bracket must be aligned with the opening tag (expected column 3)',
    )
  })
})

describe('react/jsx-curly-brace-presence', () => {
  it('correct', async () => {
    const result = await lintFixture('react/jsx-curly-brace-presence.correct.js')

    expect(result.errorCount).toBe(0)
  })

  it('incorrect', async () => {
    const result = await lintFixture('react/jsx-curly-brace-presence.incorrect.js')

    expect(result.messages).toHaveLength(1)
    expect(result.messages[0].ruleId).toBe('react/jsx-curly-brace-presence')
    expect(result.messages[0].message).toBe('Curly braces are unnecessary here.')
  })
})

describe('react/jsx-tag-spacing', () => {
  it('correct', async () => {
    const result = await lintFixture('react/jsx-tag-spacing.correct.js')

    expect(result.errorCount).toBe(0)
  })

  it('incorrect', async () => {
    const result = await lintFixture('react/jsx-tag-spacing.incorrect.js')

    expect(result.messages).toHaveLength(1)
    expect(result.messages[0].ruleId).toBe('react/jsx-tag-spacing')
    expect(result.messages[0].message).toBe('A space is required before closing bracket')
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
    expect(result.messages[0].message).toBe(
      "'React' is defined but never used. Allowed unused vars must match /^_/u.",
    )
  })
})

describe('react/jsx-no-target-blank', () => {
  it('correct', async () => {
    const result = await lintFixture('react/jsx-no-target-blank.correct.js')

    expect(result.errorCount).toBe(0)
  })
})

describe('react/no-unknown-property', () => {
  it('correct', async () => {
    const result = await lintFixture('react/no-unknown-property.correct.js')

    expect(result.errorCount).toBe(0)
  })
})

describe('react/prop-types', () => {
  it('correct', async () => {
    const result = await lintFixture('react/prop-types.correct.js')

    expect(result.errorCount).toBe(0)
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
