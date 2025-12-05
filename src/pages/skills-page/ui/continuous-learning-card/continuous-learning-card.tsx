import React from 'react';

import classes from 'src/pages/skills-page/ui/continuous-learning-card/continuous-learning-card.module.scss';
import { capitalizeLabel, Icon, toUnderscore } from 'src/shared';
import { LanguageConstants } from 'src/shared/model/lang/lang.types';
import { IconName } from 'src/shared/ui/icon/icon.names';

type Props = {
  currentLang: LanguageConstants;
};

const ContinuousLearningCard: React.FC<Props> = ({ currentLang }) => (
  <div className={classes.ContinuousLearningCard}>
    <Icon width="5rem" icon={IconName.PSYCHOLOGY} className={classes.ContinuousLearningCard__Icon} />
    <h3 className={classes.ContinuousLearningCard__Title}>
      {toUnderscore(capitalizeLabel(currentLang.labels.CONTINUOUS_LEARNING))}
    </h3>
    <p className={classes.ContinuousLearningCard__Text}>{currentLang.messages.CONSTANTLY_SKILLS_UPGRADING_MESSAGE}</p>
  </div>
);

export default ContinuousLearningCard;
