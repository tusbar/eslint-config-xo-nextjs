import eslintConfigXoReact, {type Options} from 'eslint-config-xo-react'
import {type XoConfigItem} from 'xo'

import {xoNextJsConfig} from './config.js'

export default function eslintConfigXoNextJs(options?: Options): XoConfigItem[] {
  return [...(eslintConfigXoReact(options) as XoConfigItem[]), ...xoNextJsConfig]
}
