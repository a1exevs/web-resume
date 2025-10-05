import { render, screen } from '@testing-library/react';
import * as React from 'react';
import { createMemoryRouter, RouterProvider } from 'react-router';

import appRoutes from 'src/app/ui/routes';

describe('App', () => {
  describe('Home page "/"', () => {
    it('Renders subtitle of Home page', () => {
      const router = createMemoryRouter(appRoutes, { initialEntries: ['/'] });
      render(<RouterProvider router={router} />);
      const linkElement = screen.getByText('Alexander Evstafiadi');
      expect(linkElement).toBeInTheDocument();
    });
  });
  describe('Experience page "/experience"', () => {
    it('Renders subtitle of Experience page', () => {
      const router = createMemoryRouter(appRoutes, { initialEntries: ['/experience'] });
      render(<RouterProvider router={router} />);
      const linkElement = screen.getByText('Work_Experience');
      expect(linkElement).toBeInTheDocument();
    });
  });
  describe('Skills page "/skills"', () => {
    it('Renders subtitle of Skills page', () => {
      const router = createMemoryRouter(appRoutes, { initialEntries: ['/skills'] });
      render(<RouterProvider router={router} />);
      const linkElement = screen.getByText('Skills_Matrix');
      expect(linkElement).toBeInTheDocument();
    });
  });
  describe('Projects page "/projects"', () => {
    it('Renders subtitle of Projects page', () => {
      const router = createMemoryRouter(appRoutes, { initialEntries: ['/projects'] });
      render(<RouterProvider router={router} />);
      const linkElement = screen.getByText('Projects');
      expect(linkElement).toBeInTheDocument();
    });
  });
  describe('Contacts page "/contacts"', () => {
    it('Renders subtitle of Contacts page', () => {
      const router = createMemoryRouter(appRoutes, { initialEntries: ['/contacts'] });
      render(<RouterProvider router={router} />);
      const linkElement = screen.getByText('Contacts');
      expect(linkElement).toBeInTheDocument();
    });
  });
});
