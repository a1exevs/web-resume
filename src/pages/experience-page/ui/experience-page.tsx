import React from 'react';

import classes from 'src/pages/experience-page/ui/experience-page.module.scss';
import { CareerHistoryData } from 'src/store/store.types';
import Block from 'src/ui/common/components/Block/Block';
import Card from 'src/ui/common/components/Card/Card';
import Field from 'src/ui/common/components/Field/Field';
import SimpleList from 'src/ui/common/components/SimpleList/SimpleList';
import Stepper from 'src/ui/common/components/Stepper/Stepper';

type Props = {
  careerHistoryData: CareerHistoryData;
};

const ExperiencePage: React.FC<Props> = ({ careerHistoryData }) => {
  return (
    <div className={classes.ExperiencePage}>
      <h2 className={classes.ExperiencePage__Title + ' glitch'}>Work_Experience</h2>
      <div className={classes.ExperiencePage__Content}>
        <Stepper>
          {careerHistoryData.companyExperiences.map((experience, index) => (
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
