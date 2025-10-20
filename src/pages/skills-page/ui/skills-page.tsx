import React from 'react';

import ContinuousLearningCard from 'src/pages/skills-page/ui/continuous-learning-card/continuous-learning-card';
import SkillCard from 'src/pages/skills-page/ui/skills-card/skills-card';
import classes from 'src/pages/skills-page/ui/skills-page.module.scss';
import { SkillsData } from 'src/store/store.types';

type Props = SkillsData;

const SkillsPage: React.FC<Props> = ({ skills }) => {
  return (
    <div className={classes.SkillsPage}>
      <h2 className={classes.SkillsPage__Title + ' glitch'}>Skills_Matrix</h2>
      <div className={classes.SkillsPage__Items}>
        {skills.map(skill => (
          <SkillCard key={skill.title} title={skill.title} items={skill.items} />
        ))}
        <ContinuousLearningCard />
      </div>
      <div className={classes.SkillsPage__ScanInfo}>
        <p>
          SYSTEM_SCAN_COMPLETE: <span className={classes.SkillsPage__ScanHighlight}>All skills up-to-date.</span>
        </p>
      </div>
    </div>
  );
};

export default SkillsPage;
