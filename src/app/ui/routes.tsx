import React from 'react';
import { RouteObject } from 'react-router';

import App from 'src/app/ui/app';
import { ContactsPage, ExperiencePage, HomePage, ProjectsPage, SkillsPage } from 'src/pages';
import { RoutePath } from 'src/shared';
import store from 'src/store/store';

const appRoutes: RouteObject[] = [
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: RoutePath.HOME,
        element: <HomePage mainInfoData={store.mainInfo} />,
      },
      {
        path: RoutePath.EXPERIENCE,
        element: <ExperiencePage experienceData={store.experienceData} />,
      },
      {
        path: RoutePath.SKILLS,
        element: <SkillsPage skills={store.skillsData.skills} />,
      },
      {
        path: RoutePath.PROJECTS,
        element: <ProjectsPage projects={store.projectsData.projects} />,
      },
      {
        path: RoutePath.CONTACTS,
        element: <ContactsPage contactLinks={store.contactsData.contactLinks} />,
      },
    ],
  },
];

export default appRoutes;
