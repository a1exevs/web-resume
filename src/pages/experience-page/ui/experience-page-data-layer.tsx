import React from 'react';

import ExperiencePage from 'src/pages/experience-page/ui/experience-page';
import { useDocumentTitle, useLangContext } from 'src/shared';
import store from 'src/store/store';

const ExperiencePageDataLayer: React.FC = () => {
  const { currentLang, langCode } = useLangContext();
  const experienceData = store[langCode].experienceData;

  // TODO Move to Logic layer
  useDocumentTitle({
    appName: currentLang.labels.APP_NAME,
    pageName: currentLang.routes.EXPERIENCE,
  });

  return <ExperiencePage currentLang={currentLang} experienceData={experienceData} />;
};

export default ExperiencePageDataLayer;
