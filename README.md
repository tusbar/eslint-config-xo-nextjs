# eslint-config-xo-nextjs

[![npm version](https://img.shields.io/npm/v/eslint-config-xo-nextjs)](https://www.npmjs.com/package/eslint-config-xo-nextjs)
[![XO code style](https://img.shields.io/badge/code_style-xo-cyan)](https://github.com/xojs/xo)

ESLint [shareable config](http://eslint.org/docs/developer-guide/shareable-configs.html) for Next.js to be used with [xo](https://github.com/xojs/xo).

## CI

[![Tests](https://github.com/tusbar/eslint-config-xo-nextjs/actions/workflows/tests.yml/badge.svg)](https://github.com/tusbar/eslint-config-xo-nextjs/actions/workflows/tests.yml)
[![Release](https://github.com/tusbar/eslint-config-xo-nextjs/actions/workflows/release.yml/badge.svg)](https://github.com/tusbar/eslint-config-xo-nextjs/actions/workflows/release.yml)

## Install

```
$ pnpm add -D eslint-config-xo-nextjs
```

### Example usage with XO

Create a `xo.config.js` file in your project root with the following content:

```js
import xoNextjs from "eslint-config-xo-nextjs";

/** @type {import('xo').FlatXoConfig} */
export default [
  ...xoNextjs,
  {
    // …
  },
];
```

Or in typescript:

```ts
import xoNextjs from "eslint-config-xo-nextjs";

export default [
  ...xoNextjs,
  {
    // …
  },
] satisfies import("xo").FlatXoConfig;
```

Use the space sub-config if you want 2 space indentation instead of tabs:

```ts
import xoNextJsSpace from "eslint-config-xo-nextjs/space";

export default [
  ...xoNextJsSpace,
  {
    space: 2,
    // …
  },
] satisfies import("xo").FlatXoConfig;
```

## Related

- [XO](https://github.com/xojs/xo)
- [eslint-config-xo-react](https://github.com/xojs/eslint-config-xo-react) - ESLint shareable config for React to be used with eslint-config-xo
- [eslint-config-next](https://github.com/vercel/next.js/tree/canary/packages/eslint-config-next) - ESLint config for Next.js projects

## License

MIT © [Bertrand Marron](https://github.com/tusbar)

## Miscellaneous

```
    ╚⊙ ⊙╝
  ╚═(███)═╝
 ╚═(███)═╝
╚═(███)═╝
 ╚═(███)═╝
  ╚═(███)═╝
   ╚═(███)═╝
```
