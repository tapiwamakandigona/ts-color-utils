import { hexToRgb, rgbToHex, rgbToHsl, hslToRgb, isValidHex } from './index';

describe('hexToRgb', () => {
  it('converts white', () => expect(hexToRgb('#ffffff')).toEqual({ r: 255, g: 255, b: 255 }));
  it('converts black', () => expect(hexToRgb('#000000')).toEqual({ r: 0, g: 0, b: 0 }));
  it('converts red', () => expect(hexToRgb('#ff0000')).toEqual({ r: 255, g: 0, b: 0 }));
});

describe('rgbToHex', () => {
  it('converts white', () => expect(rgbToHex({ r: 255, g: 255, b: 255 })).toBe('#ffffff'));
  it('converts red', () => expect(rgbToHex({ r: 255, g: 0, b: 0 })).toBe('#ff0000'));
});

describe('rgbToHsl', () => {
  it('converts red', () => expect(rgbToHsl({ r: 255, g: 0, b: 0 })).toEqual({ h: 0, s: 100, l: 50 }));
});

describe('isValidHex', () => {
  it('validates correct hex', () => expect(isValidHex('#ff0000')).toBe(true));
  it('rejects invalid', () => expect(isValidHex('#xyz')).toBe(false));
});
