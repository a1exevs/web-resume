import { render, screen } from '@testing-library/react';
import * as React from 'react';
import { createMemoryRouter, RouterProvider } from 'react-router';

import appRoutes from 'src/app/ui/routes';
import { currentLang, RoutePath, toUnderscore } from 'src/shared';

const TYPE_WRITER_ANIMATION_MAX_DURATION = 2000;

describe('App', () => {
  describe(`Page with route "${RoutePath.HOME}"`, () => {
    it(`Renders subtitle of page with route "${RoutePath.HOME}"`, async () => {
      const router = createMemoryRouter(appRoutes, { initialEntries: [RoutePath.HOME] });
      render(<RouterProvider router={router} />);
      const linkElement = await screen.findByText('Alexander Evstafiadi', undefined, {
        timeout: TYPE_WRITER_ANIMATION_MAX_DURATION,
      });
      expect(linkElement).toBeInTheDocument();
    });
  });
  describe(`Page with route "${RoutePath.EXPERIENCE}"`, () => {
    it(`Renders subtitle of page with route "${RoutePath.EXPERIENCE}"`, async () => {
      const router = createMemoryRouter(appRoutes, { initialEntries: [RoutePath.EXPERIENCE] });
      render(<RouterProvider router={router} />);
      const linkElement = await screen.findByText(toUnderscore(currentLang.labels.WORK_EXPERIENCE), undefined, {
        timeout: TYPE_WRITER_ANIMATION_MAX_DURATION,
      });
      expect(linkElement).toBeInTheDocument();
    });
  });
  describe(`Page with route "${RoutePath.SKILLS}"`, () => {
    it(`Renders subtitle of page with route "${RoutePath.SKILLS}"`, async () => {
      const router = createMemoryRouter(appRoutes, { initialEntries: [RoutePath.SKILLS] });
      render(<RouterProvider router={router} />);
      const linkElement = await screen.findByText(toUnderscore(currentLang.labels.SKILLS_MATRIX), undefined, {
        timeout: TYPE_WRITER_ANIMATION_MAX_DURATION,
      });
      expect(linkElement).toBeInTheDocument();
    });
  });
  describe(`Page with route "${RoutePath.PROJECTS}"`, () => {
    it(`Renders subtitle of page with route "${RoutePath.PROJECTS}"`, async () => {
      const router = createMemoryRouter(appRoutes, { initialEntries: [RoutePath.PROJECTS] });
      render(<RouterProvider router={router} />);
      const linkElement = await screen.findByText(currentLang.labels.PROJECTS, undefined, {
        timeout: TYPE_WRITER_ANIMATION_MAX_DURATION,
      });
      expect(linkElement).toBeInTheDocument();
    });
  });
  describe(`Page with route "${RoutePath.CONTACTS}"`, () => {
    it(`Renders subtitle of page with route "${RoutePath.CONTACTS}"`, async () => {
      const router = createMemoryRouter(appRoutes, { initialEntries: [RoutePath.CONTACTS] });
      render(<RouterProvider router={router} />);
      const linkElement = await screen.findByText(currentLang.labels.CONTACTS, undefined, {
        timeout: TYPE_WRITER_ANIMATION_MAX_DURATION,
      });
      expect(linkElement).toBeInTheDocument();
    });
  });
});
