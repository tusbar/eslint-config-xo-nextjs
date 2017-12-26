# eslint-config-xo-nextjs

> ESLint [shareable config](http://eslint.org/docs/developer-guide/shareable-configs.html) for Next.js to be used with [eslint-config-xo](https://github.com/sindresorhus/eslint-config-xo)


## Install

```
$ npm install --save-dev eslint-config-xo eslint-config-xo-nextjs eslint-plugin-react babel-eslint
```

## Info

This uses babel-eslint in order to use class (static) properties. It only works with eslint^3, see https://github.com/babel/babel-eslint/issues/487.


## Usage

Add some ESLint config to your package.json:

```json
{
	"name": "my-awesome-project",
	"eslintConfig": {
		"extends": ["xo", "xo-nextjs"]
	}
}
```

Or to .eslintrc:

```json
{
	"extends": ["xo", "xo-nextjs"]
}
```

Use the `space` sub-config if you want 2 space indentation instead of tabs:

```json
{
	"extends": ["xo", "xo-nextjs/space"]
}
```

You can also mix it with a [XO](https://github.com/sindresorhus/xo) sub-config:

```json
{
	"extends": ["xo/esnext", "xo-nextjs"]
}
```


## Tip

### Use with XO

```
$ npm install --save-dev eslint-config-xo-nextjs eslint-plugin-react
```

```json
{
	"name": "my-awesome-project",
	"xo": {
		"extends": "xo-nextjs"
	}
}
```


## Related

- [eslint-config-xo](https://github.com/sindresorhus/eslint-config-xo) - ESLint shareable config for XO
- [eslint-config-xo-react](https://github.com/sindresorhus/eslint-config-xo-react) - ESLint shareable config for React to be used with eslint-config-xo
- [XO](https://github.com/sindresorhus/xo)


## License

MIT © [Bertrand Marron](https://github.com/tusbar)
