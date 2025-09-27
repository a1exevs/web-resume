import React from 'react';
import ReactDOM from 'react-dom/client';

import App from 'src/App';
import { drawMatrixCanvas } from 'src/MatrixCanvas';
import reportWebVitals from 'src/reportWebVitals';
import { createBrowserRouter } from 'react-router';
import { RouterProvider } from 'react-router';

import 'src/index.scss';
import store from 'src/store/store';
import HomePage from 'src/pages/home-page/ui/home-page';
import ExperiencePage from 'src/pages/experience-page/ui/experience-page';
import SkillsPage from 'src/pages/skills-page/ui/skills-page';
import ProjectsPage from 'src/pages/projects-page/ui/projects-page';
import ContactsPage from 'src/pages/contacts-page/ui/contacts-page';

const router = createBrowserRouter([
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
        element: <ExperiencePage />,
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
]);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);

drawMatrixCanvas();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
