import * as React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText('Resume of Alexander Olegovich Evstafiadi');
  expect(linkElement).toBeInTheDocument();
});
