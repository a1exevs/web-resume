import React from 'react';

import classes from 'src/pages/home-page/ui/about-me-details/about-me-details.module.scss';
import { capitalizeLabel, currentLang, GlitchText, SimpleList, toUnderscore } from 'src/shared';

type Props = {
  summary: string;
  achievementBullets: string[];
  goal: string;
};

const AboutMeDetails: React.FC<Props> = ({ summary, achievementBullets, goal }) => {
  return (
    <div className={classes.AboutMeDetails}>
      <GlitchText className={classes.AboutMeDetails__Title} variant="h3">
        {capitalizeLabel(toUnderscore(currentLang.labels.ABOUT_ME))}
      </GlitchText>
      <div className={classes.AboutMeDetails__Content}>
        <p>{summary}</p>
        <SimpleList className={classes.AboutMeDetails__AchivementsList} items={achievementBullets} />
        <p>{goal}</p>
      </div>
    </div>
  );
};

export default AboutMeDetails;
