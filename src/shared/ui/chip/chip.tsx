import cn from 'classnames';
import React from 'react';

import classes from 'src/shared/ui/chip/chip.module.scss';

type Props = {
  text: string;
};

const Chip: React.FC<Props> = ({ text }) => (
  <div className={classes.Chip}>
    <span className={cn(classes.Chip__Text)}>{text}</span>
  </div>
);

export default Chip;
