const {join} = require('path')
const eslint = require('eslint')

function runEslint(statement) {
  const linter = new eslint.CLIEngine({
    useEslintrc: false,
    configFile: join(__dirname, '../space.js')
  })

  return linter.executeOnText(statement).results[0]
}

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
