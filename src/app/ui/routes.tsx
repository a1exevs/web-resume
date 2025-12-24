import React from 'react';
import { RouteObject } from 'react-router';

import App from 'src/app/ui/app';
import { ContactsPage, ExperiencePage, HomePage, ProjectsPage, SkillsPage } from 'src/pages';
import { RoutePath } from 'src/shared';

const appRoutes: RouteObject[] = [
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: RoutePath.HOME,
        element: <HomePage />,
      },
      {
        path: RoutePath.EXPERIENCE,
        element: <ExperiencePage />,
      },
      {
        path: RoutePath.SKILLS,
        element: <SkillsPage />,
      },
      {
        path: RoutePath.PROJECTS,
        element: <ProjectsPage />,
      },
      {
        path: RoutePath.CONTACTS,
        element: <ContactsPage />,
      },
      {
        // TODO: Implement 404 page
        path: '*',
        element: (
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              lineHeight: '10rem',
              fontSize: '10rem',
              color: '#36ba01',
            }}
          >
            404
          </div>
        ),
      },
    ],
  },
];

export default appRoutes;
