import React from 'react';

import AboutMeDetails from 'src/pages/home-page/ui/about-me-details/about-me-details';
import AdditionalDetails from 'src/pages/home-page/ui/additional-details/additional-details';
import classes from 'src/pages/home-page/ui/home-page.module.scss';
import ProfileDetails from 'src/pages/home-page/ui/profile-details/profile-details';
import { LanguageConstants } from 'src/shared/model/lang/lang.types';
import { MainInfoData } from 'src/store/store.types';

type Props = {
  mainInfoData: MainInfoData;
  currentLang: LanguageConstants;
};

const HomePage: React.FC<Props> = ({ mainInfoData, currentLang }) => {
  return (
    <div className={classes.HomePage}>
      <ProfileDetails
        currentLang={currentLang}
        fullName={mainInfoData.fullName}
        photoPath={mainInfoData.photoPath}
        position={mainInfoData.position}
        status={mainInfoData.status}
        location={mainInfoData.location}
      />
      <AboutMeDetails
        currentLang={currentLang}
        summary={mainInfoData.aboutMe.summary}
        achievementBullets={mainInfoData.aboutMe.achievementBullets}
        goal={mainInfoData.aboutMe.goal}
      />
      <div className={classes.HomePage__DetailsGrid}>
        {mainInfoData.additionalDetails.map(({ title, items }) => (
          <AdditionalDetails key={title} title={title} items={items} />
        ))}
      </div>
      <div className={classes.HomePage__Footer}>
        <p className={classes.HomePage__FooterMessage}>
          <span className={classes.HomePage__Label}>{currentLang.labels.LAST_UPDATE}:</span>
          <span className={classes.HomePage__AccentText}>{mainInfoData.resumeLastUpdateDate}</span>
        </p>
      </div>
    </div>
  );
};

export default HomePage;
