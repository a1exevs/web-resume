import React from 'react';

import AdditionalDetails from 'src/pages/home-page/ui/additional-details/additional-details';
import classes from 'src/pages/home-page/ui/home-page.module.scss';
import ProfileDetails from 'src/pages/home-page/ui/profile-details/profile-details';
import { currentLang } from 'src/shared';
import { MainInfoData } from 'src/store/store.types';

type Props = {
  mainInfoData: MainInfoData;
};

const HomePage: React.FC<Props> = ({ mainInfoData }) => {
  return (
    <div className={classes.HomePage}>
      <ProfileDetails
        fullName={mainInfoData.fullName}
        photoPath={mainInfoData.photoPath}
        position={mainInfoData.position}
        status={mainInfoData.status}
        location={mainInfoData.location}
      />
      <div className={classes.HomePage__DetailsGrid}>
        {mainInfoData.additionalDetails.map(({ title, items }) => (
          <AdditionalDetails key={title} title={title} items={items} />
        ))}
      </div>
      <div className={classes.HomePage__Footer}>
        <p>
          <span className={classes.HomePage__Label}>{currentLang.labels.LAST_UPDATE}</span>:{' '}
          <span className={classes.HomePage__AccentText}>{mainInfoData.resumeLastUpdateDate}</span>
        </p>
      </div>
    </div>
  );
};

export default HomePage;
