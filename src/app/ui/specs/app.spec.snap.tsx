import { render } from '@testing-library/react';
import { screen } from '@testing-library/react';
import React from 'react';
import { createMemoryRouter, RouterProvider } from 'react-router';

import appRoutes from 'src/app/ui/routes';
import { defaultLang, defaultLangCode } from 'src/shared/model/lang/lang.consts';
import { RoutePath } from 'src/shared/model/routes/routes';
import store from 'src/store/store';

const TYPE_WRITER_ANIMATION_MAX_DURATION = 2000;

describe('App', () => {
  describe(`Page with route "${RoutePath.HOME}"`, () => {
    it(`matches snapshot, route "${RoutePath.HOME}"`, async () => {
      const router = createMemoryRouter(appRoutes, { initialEntries: [RoutePath.HOME] });
      const { container } = render(<RouterProvider router={router} />);
      await screen.findByText(store[defaultLangCode].mainInfoData.fullName, undefined, {
        timeout: TYPE_WRITER_ANIMATION_MAX_DURATION,
      });
      expect(container).toMatchSnapshot();
    });
  });
  describe(`Page with route "${RoutePath.EXPERIENCE}"`, () => {
    it(`matches snapshot, route "${RoutePath.EXPERIENCE}"`, async () => {
      const router = createMemoryRouter(appRoutes, { initialEntries: [RoutePath.EXPERIENCE] });
      const { container } = render(<RouterProvider router={router} />);
      await screen.findByText(defaultLang.labels.WORK_EXPERIENCE, undefined, {
        timeout: TYPE_WRITER_ANIMATION_MAX_DURATION,
      });
      expect(container).toMatchSnapshot();
    });
  });
  describe(`Page with route "${RoutePath.SKILLS}"`, () => {
    it(`matches snapshot, route "${RoutePath.SKILLS}"`, async () => {
      const router = createMemoryRouter(appRoutes, { initialEntries: [RoutePath.SKILLS] });
      const { container } = render(<RouterProvider router={router} />);
      await screen.findByText(defaultLang.labels.SKILLS_MATRIX, undefined, {
        timeout: TYPE_WRITER_ANIMATION_MAX_DURATION,
      });
      expect(container).toMatchSnapshot();
    });
  });
  describe(`Page with route "${RoutePath.PROJECTS}"`, () => {
    it(`matches snapshot, route "${RoutePath.PROJECTS}"`, async () => {
      const router = createMemoryRouter(appRoutes, { initialEntries: [RoutePath.PROJECTS] });
      const { container } = render(<RouterProvider router={router} />);
      await screen.findByText(defaultLang.labels.PROJECTS, undefined, { timeout: TYPE_WRITER_ANIMATION_MAX_DURATION });
      expect(container).toMatchSnapshot();
    });
  });
  describe(`Page with route "${RoutePath.CONTACTS}"`, () => {
    it(`matches snapshot, route "${RoutePath.CONTACTS}"`, async () => {
      const router = createMemoryRouter(appRoutes, { initialEntries: [RoutePath.CONTACTS] });
      const { container } = render(<RouterProvider router={router} />);
      await screen.findByText(defaultLang.labels.CONTACTS, undefined, { timeout: TYPE_WRITER_ANIMATION_MAX_DURATION });
      expect(container).toMatchSnapshot();
    });
  });
});
