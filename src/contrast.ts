import { RGB, hexToRgb } from './index';

/**
 * Calculate relative luminance of a color (WCAG 2.0)
 */
export function luminance({ r, g, b }: RGB): number {
  const [rs, gs, bs] = [r, g, b].map(v => {
    v /= 255;
    return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
}

/**
 * Calculate contrast ratio between two colors (WCAG 2.0)
 * Returns a value between 1 (no contrast) and 21 (max contrast)
 */
export function contrastRatio(color1: RGB, color2: RGB): number {
  const l1 = luminance(color1);
  const l2 = luminance(color2);
  const lighter = Math.max(l1, l2);
  const darker = Math.min(l1, l2);
  return (lighter + 0.05) / (darker + 0.05);
}

/**
 * Check WCAG compliance level
 */
export function wcagLevel(foreground: RGB, background: RGB): 'AAA' | 'AA' | 'fail' {
  const ratio = contrastRatio(foreground, background);
  if (ratio >= 7) return 'AAA';
  if (ratio >= 4.5) return 'AA';
  return 'fail';
}

/**
 * Mix two colors
 */
export function mixColors(color1: RGB, color2: RGB, weight = 0.5): RGB {
  return {
    r: Math.round(color1.r * weight + color2.r * (1 - weight)),
    g: Math.round(color1.g * weight + color2.g * (1 - weight)),
    b: Math.round(color1.b * weight + color2.b * (1 - weight)),
  };
}

/**
 * Lighten a color by a percentage
 */
export function lighten(color: RGB, amount: number): RGB {
  return mixColors({ r: 255, g: 255, b: 255 }, color, amount / 100);
}

/**
 * Darken a color by a percentage
 */
export function darken(color: RGB, amount: number): RGB {
  return mixColors({ r: 0, g: 0, b: 0 }, color, amount / 100);
}

/**
 * Generate a color palette (analogous colors)
 */
export function generatePalette(hex: string, count: number = 5): string[] {
  const rgb = hexToRgb(hex);
  const palette: string[] = [];
  for (let i = 0; i < count; i++) {
    const factor = (i / (count - 1)) * 2 - 1; // -1 to 1
    const adjusted = factor > 0 ? lighten(rgb, factor * 40) : darken(rgb, Math.abs(factor) * 40);
    palette.push(`#${[adjusted.r, adjusted.g, adjusted.b].map(v => Math.max(0, Math.min(255, v)).toString(16).padStart(2, '0')).join('')}`);
  }
  return palette;
}
