import React from 'react';

import { EXPERIENCE_PAGE_TYPE_WRITER_DELAY } from 'src/pages/experience-page/ui/experience-page.consts';
import classes from 'src/pages/experience-page/ui/experience-page.module.scss';
import { Card, Field, SimpleList, Stepper, TypeWriter } from 'src/shared';
import { LanguageConstants } from 'src/shared/model/lang/lang.types';
import { ExperienceData } from 'src/store/store.types';

type Props = {
  currentLang: LanguageConstants;
  experienceData: ExperienceData;
};

const ExperiencePage: React.FC<Props> = ({ currentLang, experienceData }) => {
  return (
    <div className={classes.ExperiencePage}>
      <TypeWriter
        text={currentLang.labels.WORK_EXPERIENCE}
        variant="h2"
        delay={EXPERIENCE_PAGE_TYPE_WRITER_DELAY}
        className={classes.ExperiencePage__Title}
      />
      <div className={classes.ExperiencePage__Content}>
        <Stepper>
          {experienceData.companyExperiences.map((experience, index) => (
            <div className={classes.ExperiencePage__HistoryItem} key={index}>
              <div>
                <Field label={currentLang.labels.COMPANY} value={experience.companyName} />
                <Field label={currentLang.labels.WEBSITE} value={experience.website} isLink />
                <Field label={currentLang.labels.PERIOD} value={experience.workPeriod} />
                <Field label={currentLang.labels.CAREER} value={experience.career} />
              </div>
              <label
                className={'IntermediateTitle IntermediateTitle_withCenterAlignment IntermediateTitle_withoutVMargins'}
              >
                {currentLang.labels.PROJECT_LIST}
              </label>
              <label className={'Label Label_tiny Label_alignment-center'}>
                {currentLang.messages.PROJECT_LIST_ORDER_MESSAGE}
              </label>
              {experience.projectList.map((project, index) => (
                <Card key={index}>
                  <Field label={currentLang.labels.PROJECT} value={project.projectDescription} />
                  <Field label={currentLang.labels.PERIOD} value={project.workPeriod} />
                  <Field label={currentLang.labels.ENVIRONMENT} value={project.environment.join(', ')} />
                  <Field label={currentLang.labels.RESPONSIBILITIES} value={project.responsibilities.join(', ')} />
                  <div className={classes.ExperiencePage__ContributionsData}>
                    <label
                      className={
                        'IntermediateTitle IntermediateTitle_withCenterAlignment IntermediateTitle_withoutVMargins'
                      }
                    >
                      {currentLang.labels.KEY_CONTRIBUTIONS}
                    </label>
                    <SimpleList
                      className={classes.ExperiencePage__ContributionsList}
                      items={project.keyContributions}
                    />
                  </div>
                </Card>
              ))}
            </div>
          ))}
        </Stepper>
      </div>
    </div>
  );
};

export default ExperiencePage;
