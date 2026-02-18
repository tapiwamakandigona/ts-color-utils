# ts-color-utils

Lightweight TypeScript color conversion utilities. Convert between hex, RGB, and HSL with zero dependencies.

[![CI](https://github.com/tapiwamakandigona/ts-color-utils/actions/workflows/ci.yml/badge.svg)](https://github.com/tapiwamakandigona/ts-color-utils/actions)
[![npm](https://img.shields.io/badge/npm-ts--color--utils-red)](https://www.npmjs.com/package/ts-color-utils)

## Install

```bash
npm install ts-color-utils
```

## Usage

```typescript
import { hexToRgb, rgbToHex, rgbToHsl, hslToRgb, isValidHex } from 'ts-color-utils';

hexToRgb('#ff6600')     // { r: 255, g: 102, b: 0 }
rgbToHex({ r: 255, g: 102, b: 0 })  // '#ff6600'
rgbToHsl({ r: 255, g: 0, b: 0 })    // { h: 0, s: 100, l: 50 }
hslToRgb({ h: 120, s: 100, l: 50 }) // { r: 0, g: 255, b: 0 }
isValidHex('#ff6600')   // true
```

## API

| Function | Input | Output |
|----------|-------|--------|
| `hexToRgb(hex)` | `string` | `{ r, g, b }` |
| `rgbToHex(rgb)` | `{ r, g, b }` | `string` |
| `rgbToHsl(rgb)` | `{ r, g, b }` | `{ h, s, l }` |
| `hslToRgb(hsl)` | `{ h, s, l }` | `{ r, g, b }` |
| `isValidHex(hex)` | `string` | `boolean` |

## License

MIT
