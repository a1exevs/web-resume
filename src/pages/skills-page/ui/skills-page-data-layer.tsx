import React from 'react';

import SkillsPage from 'src/pages/skills-page/ui/skills-page';
import { useDocumentTitle, useLangContext } from 'src/shared';
import store from 'src/store/store';

const SkillsPageDataLayer: React.FC = () => {
  const { currentLang, langCode } = useLangContext();
  const skillsData = store[langCode].skillsData;

  useDocumentTitle({
    appName: currentLang.labels.APP_NAME,
    pageName: currentLang.routes.SKILLS,
  });

  return <SkillsPage currentLang={currentLang} skillsData={skillsData} />;
};

export default SkillsPageDataLayer;
