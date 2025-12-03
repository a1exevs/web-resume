import { render } from '@testing-library/react';
import { screen } from '@testing-library/react';
import React from 'react';
import { createMemoryRouter, RouterProvider } from 'react-router';

import appRoutes from 'src/app/ui/routes';
import { currentLang, RoutePath } from 'src/shared';

const TYPE_WRITER_ANIMATION_MAX_DURATION = 2000;

describe('App', () => {
  describe(`Page with route "${RoutePath.HOME}"`, () => {
    it(`matches snapshot, route "${RoutePath.HOME}"`, async () => {
      const router = createMemoryRouter(appRoutes, { initialEntries: [RoutePath.HOME] });
      const { container } = render(<RouterProvider router={router} />);
      await screen.findByText('Alexander Evstafiadi', undefined, { timeout: TYPE_WRITER_ANIMATION_MAX_DURATION });
      expect(container).toMatchSnapshot();
    });
  });
  describe(`Page with route "${RoutePath.EXPERIENCE}"`, () => {
    it(`matches snapshot, route "${RoutePath.EXPERIENCE}"`, async () => {
      const router = createMemoryRouter(appRoutes, { initialEntries: [RoutePath.EXPERIENCE] });
      const { container } = render(<RouterProvider router={router} />);
      await screen.findByText(currentLang.labels.WORK_EXPERIENCE, undefined, {
        timeout: TYPE_WRITER_ANIMATION_MAX_DURATION,
      });
      expect(container).toMatchSnapshot();
    });
  });
  describe(`Page with route "${RoutePath.SKILLS}"`, () => {
    it(`matches snapshot, route "${RoutePath.SKILLS}"`, async () => {
      const router = createMemoryRouter(appRoutes, { initialEntries: [RoutePath.SKILLS] });
      const { container } = render(<RouterProvider router={router} />);
      await screen.findByText(currentLang.labels.SKILLS_MATRIX, undefined, {
        timeout: TYPE_WRITER_ANIMATION_MAX_DURATION,
      });
      expect(container).toMatchSnapshot();
    });
  });
  describe(`Page with route "${RoutePath.PROJECTS}"`, () => {
    it(`matches snapshot, route "${RoutePath.PROJECTS}"`, async () => {
      const router = createMemoryRouter(appRoutes, { initialEntries: [RoutePath.PROJECTS] });
      const { container } = render(<RouterProvider router={router} />);
      await screen.findByText(currentLang.labels.PROJECTS, undefined, { timeout: TYPE_WRITER_ANIMATION_MAX_DURATION });
      expect(container).toMatchSnapshot();
    });
  });
  describe(`Page with route "${RoutePath.CONTACTS}"`, () => {
    it(`matches snapshot, route "${RoutePath.CONTACTS}"`, async () => {
      const router = createMemoryRouter(appRoutes, { initialEntries: [RoutePath.CONTACTS] });
      const { container } = render(<RouterProvider router={router} />);
      await screen.findByText(currentLang.labels.CONTACTS, undefined, { timeout: TYPE_WRITER_ANIMATION_MAX_DURATION });
      expect(container).toMatchSnapshot();
    });
  });
});
