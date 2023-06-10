import React, { ReactNode } from 'react';

import Step from 'src/ui/common/components/Stepper/Step/Step';
import classes from 'src/ui/common/components/Stepper/Stepper.module.scss';

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
