import { render, screen } from '@testing-library/react';
import * as React from 'react';

import App from 'src/app/ui/app';

test('Renders title of resume', () => {
  render(<App />);
  const linkElement = screen.getByText('Web-resume');
  expect(linkElement).toBeInTheDocument();
});
