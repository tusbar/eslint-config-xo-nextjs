import {fixupConfigRules} from '@eslint/compat'
import eslintConfigXoReact, {type Options} from 'eslint-config-xo-react'
import {type XoConfigItem} from 'xo'

import {xoNextJsConfig} from './config.js'

export default function eslintConfigXoNextJs(options?: Options): XoConfigItem[] {
  // `eslint-plugin-react` still calls APIs removed in ESLint 10 (e.g. `context.getSourceCode()`).
  // Drop the `fixupConfigRules` wrapping once it supports ESLint 10 natively.
  const reactConfig = fixupConfigRules(eslintConfigXoReact(options)) as XoConfigItem[]

  return [...reactConfig, ...xoNextJsConfig]
}
