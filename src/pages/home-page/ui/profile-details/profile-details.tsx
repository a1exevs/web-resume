import React from 'react';

import classes from 'src/pages/home-page/ui/profile-details/profile-details.module.scss';

type Props = {
  photoPath: string;
};

const ProfileDetails: React.FC<Props> = ({ photoPath }) => {
  return (
    <div className={classes.ProfileDetails}>
      <img alt="" className={classes.ProfileDetails__Photo} src={photoPath} />
      <div className={classes.ProfileDetails__Info}>
        <h2 className={classes.ProfileDetails__Name}>Alexander Evstafiadi</h2>
        <p className={classes.ProfileDetails__Position}>&gt;Senior Software Engineer</p>
        <div className={classes.ProfileDetails__Meta}>
          <span>
            <span className={classes.ProfileDetails__Comments}>//</span> STATUS: Not looking for a job
          </span>
          <span>
            <span className={classes.ProfileDetails__Comments}>//</span> LOCATION: Voronezh, Russia
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProfileDetails;
