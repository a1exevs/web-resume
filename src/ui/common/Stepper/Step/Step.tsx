import cn from 'classnames';
import React, { ReactNode } from 'react';

import classes from 'src/ui/common/Stepper/Step/Step.module.scss';

type Props = {
  current?: boolean;
  stepIndex: number;
  index: number;
  stepsCount: number;
  children: ReactNode;
};

const Step: React.FC<Props> = ({ current = false, children, stepIndex, stepsCount, index }) => (
  <div className={classes.Step}>
    <div
      className={cn(classes.Step__LeftBlock, {
        [classes.Step__LeftBlock_withBottomBorder]: index === stepsCount - 1,
      })}
    >
      <div className={cn(classes.Step__Indicator, { [classes.Step__Indicator_current]: current })}>{stepIndex}</div>
      <div className={cn(classes.Step__Arrow, { [classes.Step__Arrow_current]: current })}></div>
    </div>
    <div className={classes.Step__Content}>{children}</div>
  </div>
);

export default Step;
