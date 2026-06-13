import { hexToRgb, rgbToHex, rgbToHsl, hslToRgb, isValidHex } from './index';

describe('hexToRgb', () => {
  it('converts white', () => expect(hexToRgb('#ffffff')).toEqual({ r: 255, g: 255, b: 255 }));
  it('converts black', () => expect(hexToRgb('#000000')).toEqual({ r: 0, g: 0, b: 0 }));
  it('converts red', () => expect(hexToRgb('#ff0000')).toEqual({ r: 255, g: 0, b: 0 }));
  it('handles 3-char shorthand', () => expect(hexToRgb('#f60')).toEqual({ r: 255, g: 102, b: 0 }));
  it('handles 3-char without hash', () => expect(hexToRgb('fff')).toEqual({ r: 255, g: 255, b: 255 }));
});

describe('rgbToHex', () => {
  it('converts white', () => expect(rgbToHex({ r: 255, g: 255, b: 255 })).toBe('#ffffff'));
  it('converts red', () => expect(rgbToHex({ r: 255, g: 0, b: 0 })).toBe('#ff0000'));
});

describe('rgbToHsl', () => {
  it('converts red', () => expect(rgbToHsl({ r: 255, g: 0, b: 0 })).toEqual({ h: 0, s: 100, l: 50 }));
  it('converts green', () => expect(rgbToHsl({ r: 0, g: 255, b: 0 })).toEqual({ h: 120, s: 100, l: 50 }));
  it('converts grey', () => expect(rgbToHsl({ r: 128, g: 128, b: 128 })).toEqual({ h: 0, s: 0, l: 50 }));
  it('does not mutate input', () => {
    const color = { r: 255, g: 0, b: 0 };
    rgbToHsl(color);
    expect(color).toEqual({ r: 255, g: 0, b: 0 });
  });
});

describe('hslToRgb', () => {
  it('converts red', () => expect(hslToRgb({ h: 0, s: 100, l: 50 })).toEqual({ r: 255, g: 0, b: 0 }));
  it('converts green', () => expect(hslToRgb({ h: 120, s: 100, l: 50 })).toEqual({ r: 0, g: 255, b: 0 }));
  it('converts grey', () => expect(hslToRgb({ h: 0, s: 0, l: 50 })).toEqual({ r: 128, g: 128, b: 128 }));
  it('does not mutate input', () => {
    const hsl = { h: 120, s: 100, l: 50 };
    hslToRgb(hsl);
    expect(hsl).toEqual({ h: 120, s: 100, l: 50 });
  });
});

describe('isValidHex', () => {
  it('validates correct hex', () => expect(isValidHex('#ff0000')).toBe(true));
  it('rejects invalid', () => expect(isValidHex('#xyz')).toBe(false));
});
