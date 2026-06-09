import { describe, expect, it } from 'vitest';

import { scaleNumber } from '@/utils/scaleNumbers';

describe('scaleNumber', () => {
  it('multiplies a number by the scale factor', () => {
    expect(scaleNumber(10, 2)).toBe(20);
  });

  it('returns 0 when scaling by 0', () => {
    expect(scaleNumber(42, 0)).toBe(0);
  });

  it('handles negative scales', () => {
    expect(scaleNumber(5, -3)).toBe(-15);
  });
});
