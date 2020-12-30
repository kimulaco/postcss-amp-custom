# postcss-amp-custom

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
[![npm version](https://badge.fury.io/js/postcss-amp-custom.svg)](https://badge.fury.io/js/postcss-amp-custom)
[![Build Status](https://github.com/kimulaco/postcss-amp-custom/workflows/Test/badge.svg)](https://github.com/kimulaco/postcss-amp-custom/actions)

PostCSS plugin to optimize CSS source for AMP HTML. Removes styles that are prohibited by AMP HTML.

Supports PostCSS v7 and v8.

[amp-custom](https://github.com/kimulaco/amp-custom) is the core library. However, [amp-custom](https://github.com/kimulaco/amp-custom) will be deprecated in the future, and postcss-amp-custom will be mainly developed.

## Install

```shell
npm install --save-dev postcss-amp-custom
```

## Use

```js
// postcss.config.js
const postcssAmpCustom = require('postcss-amp-custom')

module.exports = () => ({
  plugins: [
    postcssAmpCustom({
      enableByteLimit: true
    })
  ]
})
```

```css
/* ./src/test.css */

@charset "UTF-8";
body {
  font-size: 16px;
}
@page {
  margin: 15mm;
}
@page hoge {
  size: portrait;
  margin: 15mm;
}
a {
  color: #39c !important;
  text-decoration: none;
}
@viewport {
  min-width: 640px;
  max-width: 800px;
}
@supports not (display: flex) {
  .flexbox {
    overflow: hidden;
  }
  .flexbox div {
    float: left;
  }
}


/* ./dist/test.css */

body{font-size:16px}a{color:#39c;text-decoration:none}
```

## Options

- enableByteLimit `Boolean` - If the CSS source exceeds 75KB, it issues an error.(Default: `false`)

## License

[MIT License](https://github.com/kimulaco/postcss-amp-custom/blob/master/LICENSE).
