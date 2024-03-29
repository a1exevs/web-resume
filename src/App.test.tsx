import { render, screen } from '@testing-library/react';
import * as React from 'react';

import App from 'src/App';

test('Renders title of resume', () => {
  render(<App />);
  const linkElement = screen.getByText('Web-resume');
  expect(linkElement).toBeInTheDocument();
});
