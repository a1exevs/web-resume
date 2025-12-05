import React from 'react';

import HomePage from 'src/pages/home-page/ui/home-page';
import { useDocumentTitle, useLangContext } from 'src/shared';
import store from 'src/store/store';

const HomePageDataLayer: React.FC = () => {
  const { currentLang, langCode } = useLangContext();
  const mainInfoData = store[langCode].mainInfoData;

  useDocumentTitle({
    appName: currentLang.labels.APP_NAME,
    pageName: currentLang.routes.HOME,
  });

  return <HomePage mainInfoData={mainInfoData} currentLang={currentLang} />;
};

export default HomePageDataLayer;
