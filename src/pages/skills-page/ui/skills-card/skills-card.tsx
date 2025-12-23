import React from 'react';

import classes from 'src/pages/skills-page/ui/skills-card/skills-card.module.scss';
import { Icon, IconName } from 'src/shared';

type Props = {
  title: string;
  items: string[];
  icon?: IconName;
};

const SkillsCard: React.FC<Props> = ({ title, items, icon }) => (
  <div className={classes.SkillsCard}>
    <h3 className={classes.SkillsCard__Title}>
      <span className={classes.SkillsCard__TitleIcon}>&gt;</span> {title}
    </h3>
    <ul className={classes.SkillsCard__List}>
      {items.map(item => (
        <li key={item} className={classes.SkillsCard__Item}>
          <span className={classes.SkillsCard__CodeIcon}>//</span> {item}
        </li>
      ))}
    </ul>
    {icon && <Icon width="5rem" icon={IconName.PSYCHOLOGY} className={classes.SkillsCard__Icon} />}
  </div>
);

export default SkillsCard;
