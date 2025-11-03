import React from 'react';

import classes from 'src/pages/experience-page/ui/experience-page.module.scss';
import { TypeWriter } from 'src/shared';
import Block from 'src/shared/ui/block/block';
import Card from 'src/shared/ui/card/card';
import Field from 'src/shared/ui/field/field';
import SimpleList from 'src/shared/ui/simple-list/simple-list';
import Stepper from 'src/shared/ui/stepper/stepper';
import { ExperienceData } from 'src/store/store.types';

type Props = {
  experienceData: ExperienceData;
};

const ExperiencePage: React.FC<Props> = ({ experienceData }) => {
  return (
    <div className={classes.ExperiencePage}>
      <TypeWriter
        text={'Work_Experience'}
        variant="h2"
        delay={40}
        className={classes.ExperiencePage__Title + ' glitch'}
      />
      <div className={classes.ExperiencePage__Content}>
        <Stepper>
          {experienceData.companyExperiences.map((experience, index) => (
            <div className={classes.ExperiencePage__HistoryItem} key={index}>
              <Block>
                <Field label={'Company'} value={experience.companyName} />
                <Field label={'Website'} value={experience.website} isLink />
                <Field label={'Period'} value={experience.workPeriod} />
                <Field label={'Career'} value={experience.career} />
              </Block>
              <label
                className={'IntermediateTitle IntermediateTitle_withCenterAlignment IntermediateTitle_withoutVMargins'}
              >
                {'Project list'}
              </label>
              <label className={'Label Label_tiny Label_alignment-center'}>
                {'(the most recent projects at the top)'}
              </label>
              {experience.projectList.map((project, index) => (
                <Card key={index}>
                  <Field label={'Project'} value={project.projectDescription} />
                  <Field label={'Period'} value={project.workPeriod} />
                  <Field label={'Environment'} value={project.environment.join(', ')} />
                  <Field label={'Responsibilities'} value={project.responsibilities.join(', ')} />
                  <div className={classes.ExperiencePage__ContributionsData}>
                    <label
                      className={
                        'IntermediateTitle IntermediateTitle_withCenterAlignment IntermediateTitle_withoutVMargins'
                      }
                    >
                      {'Key contributions'}
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
