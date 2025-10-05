import { render } from '@testing-library/react';
import React from 'react';
import { createMemoryRouter, RouterProvider } from 'react-router';

import appRoutes from 'src/app/ui/routes';

describe('App', () => {
  describe('Home page "/"', () => {
    it('matches snapshot, route "/"', () => {
      const router = createMemoryRouter(appRoutes, { initialEntries: ['/'] });
      const { container } = render(<RouterProvider router={router} />);
      expect(container).toMatchSnapshot();
    });
  });
  describe('Experience page "/experience"', () => {
    it('matches snapshot, route "/experience"', () => {
      const router = createMemoryRouter(appRoutes, { initialEntries: ['/experience'] });
      const { container } = render(<RouterProvider router={router} />);
      expect(container).toMatchSnapshot();
    });
  });
  describe('Skills page "/skills"', () => {
    it('matches snapshot, route "/skills"', () => {
      const router = createMemoryRouter(appRoutes, { initialEntries: ['/skills'] });
      const { container } = render(<RouterProvider router={router} />);
      expect(container).toMatchSnapshot();
    });
  });
  describe('Projects page "/projects"', () => {
    it('matches snapshot, route "/projects"', () => {
      const router = createMemoryRouter(appRoutes, { initialEntries: ['/projects'] });
      const { container } = render(<RouterProvider router={router} />);
      expect(container).toMatchSnapshot();
    });
  });
  describe('Contacts page "/contacts"', () => {
    it('matches snapshot, route "/contacts"', () => {
      const router = createMemoryRouter(appRoutes, { initialEntries: ['/contacts'] });
      const { container } = render(<RouterProvider router={router} />);
      expect(container).toMatchSnapshot();
    });
  });
});
