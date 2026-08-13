import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-react';

import QrSvg from './QrSvg.js';

describe('<QrSvg /> component', () => {
  it('renders svg element properly', async () => {
    const { container } = await render(<QrSvg value="Hello world" />);

    const firstChild = container.children[0];

    expect(firstChild).toBeInTheDocument();
    expect(firstChild?.tagName).toBe('svg');
  });

  it('renders margin in QR modules', async () => {
    const { container } = await render(<QrSvg margin={4} value="Hello world" />);

    const svg = container.querySelector('svg');
    const foregroundPath = svg?.querySelectorAll('path')[1];

    expect(svg).toHaveAttribute('viewBox', '0 0 29 29');
    expect(foregroundPath).toHaveAttribute('d', expect.stringMatching(/^M4,4/));
  });

  it('matches snapshot', async () => {
    const { container } = await render(<QrSvg value="Hello world" />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
