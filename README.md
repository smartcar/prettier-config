# @smartcar/prettier-config [![Build Status][ci-image]][ci-url] [![Greenkeeper][gk-image]][gk-url]

> Smartcar's [sharable prettier configuration](https://prettier.io/docs/en/configuration.html#sharing-configurations) file.

## Installation

1. Authenticate with GitHub package registry by following [these](https://help.github.com/en/github/managing-packages-with-github-packages/configuring-npm-for-use-with-github-packages) steps.

2. `npm install --save-dev @smartcar/prettier-config`

3. Create a `.prettierrc.js` file in the root of your project containing the following:

   ```js
   'use strict';

   module.exports = require('@smartcar/prettier-config');
   ```

## Usage

```sh
npx prettier --write [filename ...]
```

See [CLI · Prettier](https://prettier.io/docs/en/cli.html) for more.

## Related

- [@smartcar/zamboni](https://github.com/smartcar/zamboni) - Combines this config with ESLint + Husky
- [@smartcar/eslint-config](https://github.com/smartcar/eslint-config-smartcar) - ESLint shareable config for Smartcar

## License

MIT © [Smartcar, Inc.](https://smartcar.com)

[ci-url]: https://travis-ci.com/smartcar/prettier-config
[ci-image]: https://img.shields.io/travis/com/smartcar/prettier-config/master.svg?style=flat-square
[gk-url]: https://greenkeeper.io
[gk-image]: https://badges.greenkeeper.io/smartcar/prettier-config.svg?style=flat-square
