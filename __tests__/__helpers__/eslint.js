const path = require('path')
const eslint = require('eslint')
const baseConfig = require('xo/config/plugins')

function runEslint(statement) {
  const linter = new eslint.CLIEngine({
    useEslintrc: false,
    configFile: path.join(__dirname, '../../index.js'),
    baseConfig
  })

  return linter.executeOnText(statement).results[0]
}

module.exports = {runEslint}
