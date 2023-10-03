import { describe, expect, it } from 'vitest';
import React from 'react';
import { render } from '@testing-library/react';

import QrSvg from './QrSvg.js';

describe('<QrSvg /> component', () => {
  it('renders svg element properly', () => {
    const { container } = render(<QrSvg value="Hello world" />);

    const firstChild = container.children[0];

    expect(firstChild).toBeInTheDocument();
    expect(firstChild?.tagName).toBe('SVG');
  });
});
