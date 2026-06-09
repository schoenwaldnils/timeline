import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { axe } from 'vitest-axe';

import { ButtonPlain } from '@/components/Button';

describe('ButtonPlain', () => {
  it('renders its children', () => {
    const { getByRole } = render(<ButtonPlain>Save</ButtonPlain>);
    expect(getByRole('button', { name: 'Save' })).toBeDefined();
  });

  it('has no accessibility violations', async () => {
    const { container } = render(<ButtonPlain>Save</ButtonPlain>);
    const results = await axe(container);
    expect(results.violations).toEqual([]);
  });
});
