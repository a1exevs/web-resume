import React, {ReactNode} from 'react';
import classes from './Stepper.module.scss';
import Step from './Step/Step';

type Props = {
  children: ReactNode[];
};

const Stepper: React.FC<Props> = ({children}) => {
  return (
    <div className={classes.Stepper}>
      {children.map((child, index, array) => (
        <Step
          key={index}
          index={index}
          stepIndex={array.length - index}
          stepsCount={array.length}
          current={index === 0}
        >
          {child}
        </Step>
      ))}
    </div>
  );
};

export default Stepper;
