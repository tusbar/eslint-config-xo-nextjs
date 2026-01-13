import eslintConfigXoReact from 'eslint-config-xo-react'
import {type XoConfigItem} from 'xo'

import {xoNextJsConfig} from './config.js'

const config: XoConfigItem[] = [...eslintConfigXoReact, ...xoNextJsConfig]

export default config
