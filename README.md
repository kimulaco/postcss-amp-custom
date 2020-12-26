# postcss-amp-custom

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
[![npm version](https://badge.fury.io/js/postcss-amp-custom.svg)](https://badge.fury.io/js/postcss-amp-custom)
[![Build Status](https://travis-ci.org/kimulaco/postcss-amp-custom.svg?branch=master)](https://travis-ci.org/kimulaco/postcss-amp-custom)

PostCSS plugin to optimize CSS source for AMP HTML.

[amp-custom](https://github.com/kimulaco/amp-custom) is the core library.

## Install

```shell
npm install --save-dev postcss-amp-custom
```

## Use

```js
// postcss.config.js
module.exports = () => ({
    plugins: [
        require('postcss-amp-custom')({
            enableByteLimit: true
        })
    ]
});
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

## Plugins

- [amp-custom](https://github.com/kimulaco/amp-custom)
- [gulp-amp-custom](https://github.com/kimulaco/gulp-amp-custom)

## License

[MIT License](https://github.com/kimulaco/postcss-amp-custom/blob/master/LICENSE).
