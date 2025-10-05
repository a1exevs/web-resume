import React from 'react';
import { RouteObject } from 'react-router';

import App from 'src/app/ui/app';
import { ContactsPage, ExperiencePage, HomePage, ProjectsPage, SkillsPage } from 'src/pages';
import store from 'src/store/store';

const appRoutes: RouteObject[] = [
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <HomePage commonInfoData={store.commonInfo} />,
      },
      {
        path: '/experience',
        element: <ExperiencePage careerHistoryData={store.content.careerHistory} />,
      },
      {
        path: '/skills',
        element: <SkillsPage />,
      },
      {
        path: '/projects',
        element: <ProjectsPage />,
      },
      {
        path: '/contacts',
        element: <ContactsPage />,
      },
    ],
  },
];

export default appRoutes;
