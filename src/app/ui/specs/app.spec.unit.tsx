import { render, screen } from '@testing-library/react';
import * as React from 'react';
import { MemoryRouter, Route, Routes } from 'react-router';

import App from 'src/app/ui/app';

describe('App', () => {
  it('Renders title of resume', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<div />} />
          </Route>
        </Routes>
      </MemoryRouter>,
    );
    const linkElement = screen.getByText('Web-resume');
    expect(linkElement).toBeInTheDocument();
  });
});
