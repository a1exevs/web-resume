import { render } from '@testing-library/react';
import React from 'react';
import { createMemoryRouter, RouterProvider } from 'react-router';

import appRoutes from 'src/app/ui/routes';
import { RoutePath } from 'src/shared';

describe('App', () => {
  describe(`Page with route "${RoutePath.HOME}"`, () => {
    it(`matches snapshot, route "${RoutePath.HOME}"`, () => {
      const router = createMemoryRouter(appRoutes, { initialEntries: [RoutePath.HOME] });
      const { container } = render(<RouterProvider router={router} />);
      expect(container).toMatchSnapshot();
    });
  });
  describe(`Page with route "${RoutePath.EXPERIENCE}"`, () => {
    it(`matches snapshot, route "${RoutePath.EXPERIENCE}"`, () => {
      const router = createMemoryRouter(appRoutes, { initialEntries: [RoutePath.EXPERIENCE] });
      const { container } = render(<RouterProvider router={router} />);
      expect(container).toMatchSnapshot();
    });
  });
  describe(`Page with route "${RoutePath.SKILLS}"`, () => {
    it(`matches snapshot, route "${RoutePath.SKILLS}"`, () => {
      const router = createMemoryRouter(appRoutes, { initialEntries: [RoutePath.SKILLS] });
      const { container } = render(<RouterProvider router={router} />);
      expect(container).toMatchSnapshot();
    });
  });
  describe(`Page with route "${RoutePath.PROJECTS}"`, () => {
    it(`matches snapshot, route "${RoutePath.PROJECTS}"`, () => {
      const router = createMemoryRouter(appRoutes, { initialEntries: [RoutePath.PROJECTS] });
      const { container } = render(<RouterProvider router={router} />);
      expect(container).toMatchSnapshot();
    });
  });
  describe(`Page with route "${RoutePath.CONTACTS}"`, () => {
    it(`matches snapshot, route "${RoutePath.CONTACTS}"`, () => {
      const router = createMemoryRouter(appRoutes, { initialEntries: [RoutePath.CONTACTS] });
      const { container } = render(<RouterProvider router={router} />);
      expect(container).toMatchSnapshot();
    });
  });
});
