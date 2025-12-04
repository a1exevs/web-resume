import React from 'react';

import HomePage from 'src/pages/home-page/ui/home-page';
import { useLangContext } from 'src/shared';
import { MainInfoData } from 'src/store/store.types';

type Props = {
  mainInfoData: MainInfoData;
};

const HomePageDataLayer: React.FC<Props> = ({ mainInfoData }) => {
  const { currentLang } = useLangContext();

  return <HomePage mainInfoData={mainInfoData} currentLang={currentLang} />;
};

export default HomePageDataLayer;
