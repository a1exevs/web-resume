import { render, screen } from '@testing-library/react';
import * as React from 'react';
import { createMemoryRouter, RouterProvider } from 'react-router';

import appRoutes from 'src/app/ui/routes';
import { RoutePath } from 'src/shared';

describe('App', () => {
  describe(`Page with route "${RoutePath.HOME}"`, () => {
    it(`Renders subtitle of page with route "${RoutePath.HOME}"`, () => {
      const router = createMemoryRouter(appRoutes, { initialEntries: [RoutePath.HOME] });
      render(<RouterProvider router={router} />);
      const linkElement = screen.getByText('Alexander Evstafiadi');
      expect(linkElement).toBeInTheDocument();
    });
  });
  describe(`Page with route "${RoutePath.EXPERIENCE}"`, () => {
    it(`Renders subtitle of page with route "${RoutePath.EXPERIENCE}"`, () => {
      const router = createMemoryRouter(appRoutes, { initialEntries: [RoutePath.EXPERIENCE] });
      render(<RouterProvider router={router} />);
      const linkElement = screen.getByText('Work_Experience');
      expect(linkElement).toBeInTheDocument();
    });
  });
  describe(`Page with route "${RoutePath.SKILLS}"`, () => {
    it(`Renders subtitle of page with route "${RoutePath.SKILLS}"`, () => {
      const router = createMemoryRouter(appRoutes, { initialEntries: [RoutePath.SKILLS] });
      render(<RouterProvider router={router} />);
      const linkElement = screen.getByText('Skills_Matrix');
      expect(linkElement).toBeInTheDocument();
    });
  });
  describe(`Page with route "${RoutePath.PROJECTS}"`, () => {
    it(`Renders subtitle of page with route "${RoutePath.PROJECTS}"`, () => {
      const router = createMemoryRouter(appRoutes, { initialEntries: [RoutePath.PROJECTS] });
      render(<RouterProvider router={router} />);
      const linkElement = screen.getByText('Projects');
      expect(linkElement).toBeInTheDocument();
    });
  });
  describe(`Page with route "${RoutePath.CONTACTS}"`, () => {
    it(`Renders subtitle of page with route "${RoutePath.CONTACTS}"`, () => {
      const router = createMemoryRouter(appRoutes, { initialEntries: [RoutePath.CONTACTS] });
      render(<RouterProvider router={router} />);
      const linkElement = screen.getByText('Contacts');
      expect(linkElement).toBeInTheDocument();
    });
  });
});
