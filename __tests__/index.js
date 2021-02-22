const {runEslint} = require('./__helpers__/eslint')

describe('index', () => {
  it('should generate error messages', () => {
    const statements = [
      'var app = <div className=\'foo\'>Unicorn</div>',
      '<App>\n\t<Hello />\n</App>',
      'var React = require(\'react\')\nvar el = <div />',
      'import foo from \'foo\''
    ]

    for (const statement of statements) {
      const {messages} = runEslint(statement)
      expect(messages).toMatchSnapshot()
    }
  })
})
