import eslintConfigXoReactSpace from 'eslint-config-xo-react/space'
import {type XoConfigItem} from 'xo'

import {xoNextJsConfig} from './config.js'

const config: XoConfigItem[] = [...eslintConfigXoReactSpace, ...xoNextJsConfig]

export default config
