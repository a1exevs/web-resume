import React from 'react';

import SkillsCard from 'src/pages/skills-page/ui/skills-card/skills-card';
import { SKILLS_PAGE_TYPE_WRITER_DELAY } from 'src/pages/skills-page/ui/skills-page.consts';
import classes from 'src/pages/skills-page/ui/skills-page.module.scss';
import { IconName, toUnderscore, TypeWriter } from 'src/shared';
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
        <SkillsCard
          icon={IconName.PSYCHOLOGY}
          title={currentLang.labels.CONTINUOUS_LEARNING}
          items={[currentLang.messages.CONSTANTLY_SKILLS_UPGRADING_MESSAGE]}
        />
      </div>
      <div className={classes.SkillsPage__Footer}>
        <p className={classes.SkillsPage__ScanInfo}>
          <span className={classes.SkillsPage__ScanLabel}>
            {toUnderscore(currentLang.labels.SYSTEM_SKAN_COMPLETE)}:
          </span>
          <span className={classes.SkillsPage__ScanHighlight}>{currentLang.messages.SKILLS_DATA_UPDATE_MESSAGE}</span>
        </p>
      </div>
    </div>
  );
};

export default SkillsPage;
