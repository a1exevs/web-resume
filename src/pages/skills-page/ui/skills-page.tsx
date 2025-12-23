import React from 'react';

import ContinuousLearningCard from 'src/pages/skills-page/ui/continuous-learning-card/continuous-learning-card';
import SkillsCard from 'src/pages/skills-page/ui/skills-card/skills-card';
import { SKILLS_PAGE_TYPE_WRITER_DELAY } from 'src/pages/skills-page/ui/skills-page.consts';
import classes from 'src/pages/skills-page/ui/skills-page.module.scss';
import { toUnderscore, TypeWriter } from 'src/shared';
import { LanguageConstants } from 'src/shared/model/lang/lang.types';
import { SkillsData } from 'src/store/store.types';

type Props = {
  currentLang: LanguageConstants;
  skillsData: SkillsData;
};

const SkillsPage: React.FC<Props> = ({ currentLang, skillsData }) => {
  return (
    <div className={classes.SkillsPage}>
      <TypeWriter
        text={currentLang.labels.SKILLS_MATRIX}
        variant="h2"
        delay={SKILLS_PAGE_TYPE_WRITER_DELAY}
        className={classes.SkillsPage__Title}
      />
      <div className={classes.SkillsPage__Items}>
        {skillsData.skills.map(skill => (
          <SkillsCard key={skill.title} title={skill.title} items={skill.items} />
        ))}
        <ContinuousLearningCard currentLang={currentLang} />
      </div>
      <div className={classes.SkillsPage__ScanInfo}>
        <p>
          <span className={classes.SkillsPage__ScanLabel}>{toUnderscore(currentLang.labels.SYSTEM_SKAN_COMPLETE)}</span>
          : <span className={classes.SkillsPage__ScanHighlight}>{currentLang.messages.SKILLS_DATA_UPDATE_MESSAGE}</span>
        </p>
      </div>
    </div>
  );
};

export default SkillsPage;
