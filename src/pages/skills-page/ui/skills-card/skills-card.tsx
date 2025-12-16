import React from 'react';

import classes from 'src/pages/skills-page/ui/skills-card/skills-card.module.scss';

type Props = {
  title: string;
  items: string[];
};

const SkillsCard: React.FC<Props> = ({ title, items }) => (
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
  </div>
);

export default SkillsCard;
