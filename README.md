[![npm](https://img.shields.io/npm/v/@wojtekmaj/react-qr-svg.svg)](https://www.npmjs.com/package/@wojtekmaj/react-qr-svg) ![downloads](https://img.shields.io/npm/dt/@wojtekmaj/react-qr-svg.svg) [![CI](https://github.com/wojtekmaj/react-qr-svg/workflows/CI/badge.svg)](https://github.com/wojtekmaj/react-qr-svg/actions) [![tested with jest](https://img.shields.io/badge/tested_with-jest-99424f.svg)](https://github.com/facebook/jest)

# React-QR-SVG

Render QR codes as SVG in your React app.

## tl;dr

- Install by executing `npm install @wojtekmaj/react-qr-svg` or `yarn add @wojtekmaj/react-qr-svg`.
- Import by adding `import QrSvg from '@wojtekmaj/react-qr-svg'`.
- Use by adding `<QrSvg value="Hello world" />`.

## Demo

A minimal demo page can be found in `sample` directory.

## Getting started

### Compatibility

Your project needs to use React 16.8 or later.

React-QR-SVG is also compatible with React Native.

### Installation

Add React-QR-SVG to your project by executing `npm install @wojtekmaj/react-qr-svg` or `yarn add @wojtekmaj/react-qr-svg`.

### Usage

Here's an example of basic usage:

```js
import React from 'react';
import QrSvg from '@wojtekmaj/react-qr-svg';

function MyApp() {
  return (
    <div>
      <QrSvg value="Hello world" />
    </div>
  );
}
```

Check the [sample directory](https://github.com/wojtekmaj/react-qr-svg/tree/main/sample) in this repository for a full working example.

## User guide

### QrSvg

Renders QR code as SVG.

#### Props

| Prop name       | Description                                                                                                             | Default value | Example values                                                         |
| --------------- | ----------------------------------------------------------------------------------------------------------------------- | ------------- | ---------------------------------------------------------------------- |
| bgColor         | Background color.                                                                                                       | `"white"`     | <ul><li>Color name: `"beige"`</li><li>Color hex: `"#fefefe"`</li></ul> |
| cellClassPrefix | Cell class name prefix. If provided, `bgColor` and `fgColor` are ignored.                                               | `""`          | `"qr-svg__cell"`                                                       |
| fgColor         | Foreground color.                                                                                                       | `"black"`     | <ul><li>Color name: `"black"`</li><li>Color hex: `"#000000"`</li></ul> |
| level           | [Error correction level](https://en.wikipedia.org/wiki/QR_code#Error_correction). Can be `"L"`, `"M"`, `"Q"` and `"H"`. | `"L"`         | `"M"`                                                                  |
| type            | Type (size). Can be any number from 0 to 40. Set to `0` to use the smallest possible size.                              | `0`           | `0`                                                                    |
| value           | Value to render.                                                                                                        | n/a           | `"Hello world"`                                                        |

You can also specify all the props that are valid for the `<svg>` React element (e.g. `style`, `className` or `width`).

## License

The MIT License.

## Author

<table>
  <tr>
    <td>
      <img src="https://github.com/wojtekmaj.png?s=100" width="100">
    </td>
    <td>
      Wojciech Maj<br />
      <a href="mailto:kontakt@wojtekmaj.pl">kontakt@wojtekmaj.pl</a><br />
      <a href="https://wojtekmaj.pl">https://wojtekmaj.pl</a>
    </td>
  </tr>
</table>

## Thank you

This project wouldn't be possible without the awesome work of Dan Homola <dan.homola@hotmail.cz> who created its original version.
