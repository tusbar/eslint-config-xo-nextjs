const {runEslint} = require('./__helpers__/eslint')

describe('index', () => {
  it('should generate spacing errors messages', () => {
    const statements = [
      'const el = (\n<div>\n<span />\n</div>\n)',
      'const el = (\n\t<div>\n\t\t<span />\n\t</div>\n)'
    ]

    for (const statement of statements) {
      const {messages} = runEslint(statement)

      expect(messages).toMatchSnapshot()
    }
  })
})
