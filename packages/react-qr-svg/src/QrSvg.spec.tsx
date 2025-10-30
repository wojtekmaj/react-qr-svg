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
});
