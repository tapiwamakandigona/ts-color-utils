import { luminance, contrastRatio, wcagLevel, mixColors, lighten, darken, generatePalette } from './contrast';

describe('luminance', () => {
  it('white = 1', () => expect(luminance({ r: 255, g: 255, b: 255 })).toBeCloseTo(1, 1));
  it('black = 0', () => expect(luminance({ r: 0, g: 0, b: 0 })).toBeCloseTo(0, 1));
});

describe('contrastRatio', () => {
  it('black on white = 21', () => {
    const ratio = contrastRatio({ r: 0, g: 0, b: 0 }, { r: 255, g: 255, b: 255 });
    expect(ratio).toBeCloseTo(21, 0);
  });
  it('same color = 1', () => {
    const ratio = contrastRatio({ r: 128, g: 128, b: 128 }, { r: 128, g: 128, b: 128 });
    expect(ratio).toBeCloseTo(1, 0);
  });
});

describe('wcagLevel', () => {
  it('black on white = AAA', () => {
    expect(wcagLevel({ r: 0, g: 0, b: 0 }, { r: 255, g: 255, b: 255 })).toBe('AAA');
  });
  it('light gray on white = fail', () => {
    expect(wcagLevel({ r: 200, g: 200, b: 200 }, { r: 255, g: 255, b: 255 })).toBe('fail');
  });
});

describe('mixColors', () => {
  it('50/50 mix of black and white', () => {
    const result = mixColors({ r: 0, g: 0, b: 0 }, { r: 255, g: 255, b: 255 });
    expect(result.r).toBeCloseTo(128, 0);
  });
});

describe('generatePalette', () => {
  it('generates correct number of colors', () => {
    const palette = generatePalette('#6366f1', 5);
    expect(palette).toHaveLength(5);
    expect(palette[0]).toMatch(/^#[0-9a-f]{6}$/);
  });
});
