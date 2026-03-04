declare module '@next/eslint-plugin-next' {
  import {type Linter} from 'eslint'

  const plugin: Record<string, unknown> & {
    configs: {
      recommended: Linter.Config
      'core-web-vitals': Linter.Config
    }
  }

  export default plugin
}
