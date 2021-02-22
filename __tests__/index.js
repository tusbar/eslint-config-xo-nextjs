const path = require('path')
const eslint = require('eslint')

function runEslint(statement) {
  const linter = new eslint.CLIEngine({
    useEslintrc: false,
    configFile: path.join(__dirname, '../index.js')
  })

  return linter.executeOnText(statement).results[0]
}

describe('index', () => {
  it('should generate error messages', () => {
    const statements = [
      'var app = <div className=\'foo\'>Unicorn</div>',
      '<App>\n\t<Hello />\n</App>'
    ]

    for (const statement of statements) {
      const {messages} = runEslint(statement)

      expect(messages).toMatchSnapshot()
    }
  })

  it('should support class properties with babel-eslint', () => {
    const {messages} = runEslint(
      'var React = require(\'react\')\nclass Foo {\nonClick = e => {}\nrender() {return <div />}}'
    )

    expect(messages.length).toBe(0)
  })

  it('should not generate any error', () => {
    const statements = [
      'var React = require(\'react\')\nvar el = <div />'
    ]

    for (const statement of statements) {
      const {messages} = runEslint(statement)

      expect(messages.length).toBe(0)
    }
  })
})
