import React from 'react';
import classes from 'src/pages/home-page/home-page.module.scss';

import AdditionalDetails from 'src/pages/home-page/ui/additional-details/additional-details';
import ProfileDetails from 'src/pages/home-page/ui/profile-details/profile-details';
import { MainInfoData } from 'src/store/store.types';

type Props = {
  mainInfoData: MainInfoData;
};

const HomePage: React.FC<Props> = ({ mainInfoData }) => {
  return (
    <div className={classes.HomePage}>
      <ProfileDetails photoPath={mainInfoData.photoPath} />
      <div className={classes.HomePage__DetailsGrid}>
        {mainInfoData.additionalDetails.map(({ title, items }) => (
          <AdditionalDetails key={title} title={title} items={items} />
        ))}
      </div>
      <div className={classes.HomePage__Footer}>
        <p>
          LAST UPDATE: <span className={classes.HomePage__AccentText}>October 22, 2025</span>
        </p>
      </div>
    </div>
  );
};

export default HomePage;
