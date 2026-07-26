# ts-color-utils

Lightweight TypeScript color conversion and contrast utilities. Convert between hex, RGB, and HSL, check WCAG contrast compliance, and generate color palettes — all with zero dependencies.

[![CI](https://github.com/tapiwamakandigona/ts-color-utils/actions/workflows/ci.yml/badge.svg)](https://github.com/tapiwamakandigona/ts-color-utils/actions)
[![npm](https://img.shields.io/badge/npm-ts--color--utils-red)](https://www.npmjs.com/package/ts-color-utils)

## Install

```bash
npm install ts-color-utils
```

## Usage

### Color Conversion

```typescript
import { hexToRgb, rgbToHex, rgbToHsl, hslToRgb, isValidHex } from 'ts-color-utils';

hexToRgb('#ff6600')                  // { r: 255, g: 102, b: 0 }
hexToRgb('#f60')                     // { r: 255, g: 102, b: 0 } (3-char shorthand)
rgbToHex({ r: 255, g: 102, b: 0 })  // '#ff6600'
rgbToHsl({ r: 255, g: 0, b: 0 })    // { h: 0, s: 100, l: 50 }
hslToRgb({ h: 120, s: 100, l: 50 }) // { r: 0, g: 255, b: 0 }
isValidHex('#ff6600')                // true
```

### Contrast & Accessibility

```typescript
import { contrastRatio, wcagLevel, luminance } from 'ts-color-utils';

const black = { r: 0, g: 0, b: 0 };
const white = { r: 255, g: 255, b: 255 };

luminance(white)              // 1
contrastRatio(black, white)   // 21 (maximum contrast)
wcagLevel(black, white)       // 'AAA'
```

### Color Manipulation

```typescript
import { mixColors, lighten, darken, generatePalette } from 'ts-color-utils';

mixColors({ r: 0, g: 0, b: 0 }, { r: 255, g: 255, b: 255 })  // 50/50 mix
lighten({ r: 100, g: 100, b: 100 }, 20)   // lighten by 20%
darken({ r: 100, g: 100, b: 100 }, 20)    // darken by 20%
generatePalette('#6366f1', 5)              // array of 5 hex color strings
```

## API

### Conversion

| Function | Input | Output | Description |
|----------|-------|--------|-------------|
| `hexToRgb(hex)` | `string` | `{ r, g, b }` | Hex string (3 or 6 chars) to RGB |
| `rgbToHex(rgb)` | `{ r, g, b }` | `string` | RGB to hex string |
| `rgbToHsl(rgb)` | `{ r, g, b }` | `{ h, s, l }` | RGB to HSL |
| `hslToRgb(hsl)` | `{ h, s, l }` | `{ r, g, b }` | HSL to RGB |
| `isValidHex(hex)` | `string` | `boolean` | Check if string is a valid hex color |

### Contrast & Accessibility

| Function | Input | Output | Description |
|----------|-------|--------|-------------|
| `luminance(rgb)` | `{ r, g, b }` | `number` | Relative luminance (WCAG 2.0) |
| `contrastRatio(c1, c2)` | Two `{ r, g, b }` | `number` | Contrast ratio (1–21) |
| `wcagLevel(fg, bg)` | Two `{ r, g, b }` | `'AAA' \| 'AA' \| 'fail'` | WCAG compliance level |

### Color Manipulation

| Function | Input | Output | Description |
|----------|-------|--------|-------------|
| `mixColors(c1, c2, weight?)` | Two `{ r, g, b }`, optional weight 0–1 | `{ r, g, b }` | Mix two colors |
| `lighten(color, amount)` | `{ r, g, b }`, percentage | `{ r, g, b }` | Lighten by percentage |
| `darken(color, amount)` | `{ r, g, b }`, percentage | `{ r, g, b }` | Darken by percentage |
| `generatePalette(hex, count?)` | hex `string`, optional count | `string[]` | Generate a color palette |

## Project Structure

```
src/
  index.ts          # Core conversion functions (hex, RGB, HSL) and re-exports
  contrast.ts       # Contrast, luminance, WCAG checks, color manipulation
  index.test.ts     # Tests for core conversions
  contrast.test.ts  # Tests for contrast and manipulation
```

## Development

```bash
npm install       # install dependencies
npm run build     # compile TypeScript → dist/
npm test          # run Jest test suite
```

## License

MIT
