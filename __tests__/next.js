import lintFixture from '../lib/lint-fixture.js'

describe('@next/next/google-font-display', () => {
  it('correct', async () => {
    const result = await lintFixture('@next/next/google-font-display.correct.js')

    expect(result.errorCount).toBe(0)
  })

  it('incorrect', async () => {
    const result = await lintFixture('@next/next/google-font-display.incorrect.js')

    expect(result.messages).toHaveLength(4)

    for (const [index, errorMessage] of [
      'Display parameter is missing. See: https://nextjs.org/docs/messages/google-font-display',
      'Block behavior is not recommended. See: https://nextjs.org/docs/messages/google-font-display',
      'Auto behavior is not recommended. See: https://nextjs.org/docs/messages/google-font-display',
      'Fallback behavior is not recommended. See: https://nextjs.org/docs/messages/google-font-display',
    ].entries()) {
      expect(result.messages[index].ruleId).toBe('@next/next/google-font-display')
      expect(result.messages[index].message).toBe(errorMessage)
    }
  })
})

describe('@next/next/google-font-preconnect', () => {
  it('correct', async () => {
    const result = await lintFixture('@next/next/google-font-preconnect.correct.js')

    expect(result.errorCount).toBe(0)
  })

  it('incorrect', async () => {
    const result = await lintFixture('@next/next/google-font-preconnect.incorrect.js')

    expect(result.messages).toHaveLength(3)

    for (const message of result.messages) {
      expect(message.ruleId).toBe('@next/next/google-font-preconnect')
      expect(message.message).toBe(
        'Preconnect is missing. See: https://nextjs.org/docs/messages/google-font-preconnect',
      )
    }
  })
})

describe('@next/next/no-css-tags', () => {
  it('correct', async () => {
    const result = await lintFixture('@next/next/no-css-tags.correct.js')

    expect(result.errorCount).toBe(0)
  })

  it('incorrect', async () => {
    const result = await lintFixture('@next/next/no-css-tags.incorrect.js')

    expect(result.messages).toHaveLength(1)
    expect(result.messages[0].ruleId).toBe('@next/next/no-css-tags')
    expect(result.messages[0].message).toBe(
      'Do not include stylesheets manually. See: https://nextjs.org/docs/messages/no-css-tags',
    )
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
    expect(result.messages[0].message).toBe(
      'External synchronous scripts are forbidden. See: https://nextjs.org/docs/messages/no-sync-scripts',
    )
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
    expect(result.messages[0].message).toBe(
      'No duplicate polyfills from Polyfill.io are allowed. es2019 is already shipped with Next.js. See: https://nextjs.org/docs/messages/no-unwanted-polyfillio',
    )
  })
})
