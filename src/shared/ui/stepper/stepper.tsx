import React, { ReactNode } from 'react';

import Step from 'src/shared/ui/stepper/step/step';
import classes from 'src/shared/ui/stepper/stepper.module.scss';

type Props = {
  children: ReactNode[];
};

const Stepper: React.FC<Props> = ({ children }) => (
  <div className={classes.Stepper}>
    {children.map((child, index, array) => (
      <Step key={index} index={index} stepIndex={array.length - index} stepsCount={array.length} current={index === 0}>
        {child}
      </Step>
    ))}
  </div>
);

export default Stepper;
