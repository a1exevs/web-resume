import React from 'react';

import { CareerHistoryData } from 'src/store/store.types';
import Block from 'src/ui/common/Block/Block';
import Card from 'src/ui/common/Card/Card';
import Field from 'src/ui/common/Field/Field';
import Stepper from 'src/ui/common/Stepper/Stepper';
import classes from 'src/ui/Content/CareerHistory/CareerHistory.module.scss';

type Props = CareerHistoryData;

const CareerHistory: React.FC<Props> = ({ companyExperiences }) => (
  <div className={classes.CareerHistory}>
    <Stepper>
      {companyExperiences.map((experience, index) => (
        <div key={index} style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
          <Block>
            <Field label={'Company'} value={experience.companyName} />
            <Field label={'Website'} value={experience.website} isLink />
            <Field label={'Period'} value={experience.workPeriod} />
            <Field label={'Career'} value={experience.career} />
          </Block>
          <label
            className={'IntermediateTitle IntermediateTitle_withCenterAlignment IntermediateTitle_withoutTopMargin'}
          >
            {'Project list (the most recent projects at the top)'}
          </label>
          {experience.projectList.map((project, index) => (
            <Card key={index}>
              <Field label={'Project description'} value={project.projectDescription} />
              <Field label={'Environment'} value={project.environment.join(', ')} />
              <Field label={'Responsibilities'} value={project.responsibilities.join(', ')} />
            </Card>
          ))}
        </div>
      ))}
    </Stepper>
  </div>
);

export default CareerHistory;
