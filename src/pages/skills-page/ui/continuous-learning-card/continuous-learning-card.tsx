import React from 'react';

import classes from 'src/pages/skills-page/ui/continuous-learning-card/continuous-learning-card.module.scss';
import { Icon } from 'src/shared';
import { IconName } from 'src/shared/ui/icon/icon.names';

const ContinuousLearningCard: React.FC = () => (
  <div className={classes.ContinuousLearningCard}>
    <Icon width="5rem" icon={IconName.PSYCHOLOGY} className={classes.ContinuousLearningCard__Icon} />
    <h3 className={classes.ContinuousLearningCard__Title}>Continuous_Learning</h3>
    <p className={classes.ContinuousLearningCard__Text}>
      Constantly upgrading my skill set to stay ahead in the ever-evolving tech landscape.
    </p>
  </div>
);

export default ContinuousLearningCard;
