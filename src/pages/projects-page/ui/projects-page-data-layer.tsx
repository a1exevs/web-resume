import React from 'react';

import ProjectsPage from 'src/pages/projects-page/ui/projects-page';
import { useDocumentTitle, useLangContext } from 'src/shared';
import store from 'src/store/store';

const ProjectsPageDataLayer: React.FC = () => {
  const { currentLang, langCode } = useLangContext();
  const projectsData = store[langCode].projectsData;

  // TODO Move to Logic layer
  useDocumentTitle({
    appName: currentLang.labels.APP_NAME,
    pageName: currentLang.routes.PROJECTS,
  });

  return <ProjectsPage currentLang={currentLang} projectsData={projectsData} />;
};

export default ProjectsPageDataLayer;
