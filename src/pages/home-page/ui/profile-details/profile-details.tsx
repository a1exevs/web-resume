import React from 'react';

import { PROFILE_DETAILS_TYPE_WRITER_DELAY } from 'src/pages/home-page/ui/profile-details/profile-details.consts';
import classes from 'src/pages/home-page/ui/profile-details/profile-details.module.scss';
import { TypeWriter } from 'src/shared';
import { LanguageConstants } from 'src/shared/model/lang/lang.types';

type Props = {
  fullName: string;
  photoPath: string;
  position: string;
  status: string;
  location: string;
  currentLang: LanguageConstants;
};

const ProfileDetails: React.FC<Props> = ({ fullName, photoPath, position, status, location, currentLang }) => {
  return (
    <div className={classes.ProfileDetails}>
      <img alt={currentLang.imageAlts.AVATAR} className={classes.ProfileDetails__Photo} src={photoPath} />
      <div className={classes.ProfileDetails__Info}>
        <TypeWriter
          variant="h2"
          text={fullName}
          delay={PROFILE_DETAILS_TYPE_WRITER_DELAY}
          className={classes.ProfileDetails__Name}
        />
        <p className={classes.ProfileDetails__Position}>&gt; {position}</p>
        <div className={classes.ProfileDetails__Meta}>
          <span>
            <span className={classes.ProfileDetails__Comments}>//</span>{' '}
            <span className={classes.ProfileDetails__Label}>{currentLang.labels.STATUS}</span>: {status}
          </span>
          <span>
            <span className={classes.ProfileDetails__Comments}>//</span>{' '}
            <span className={classes.ProfileDetails__Label}>{currentLang.labels.LOCATION}</span>: {location}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProfileDetails;
