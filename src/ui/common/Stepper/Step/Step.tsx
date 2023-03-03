import React, {ReactNode} from "react";
import classes from './Step.module.scss';
import cn from "classnames"

type Props = {
  current?: boolean,
  stepIndex: number,
  index: number,
  stepsCount: number,
  children: ReactNode
}

const Step: React.FC<Props> = ({
                                 current = false,
                                 children,
                                 stepIndex,
                                 stepsCount,
                                 index
                               }) => {
  return (
    <div className={classes.Step}>
      <div
        className={cn(classes.Step__LeftBlock, {[classes.Step__LeftBlock_withBottomBorder]: index === stepsCount - 1})}>
        <div className={cn(classes.Step__Indicator, {[classes.Step__Indicator_current]: current})}>
          <text>{stepIndex}</text>
        </div>
        <div className={cn(classes.Step__Arrow, {[classes.Step__Arrow_current]: current})}></div>
      </div>
      <div className={classes.Step__Content}>{children}</div>
    </div>
  )
}

export default Step;
