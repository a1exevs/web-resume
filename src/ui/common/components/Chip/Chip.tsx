import cn from 'classnames';
import React from 'react';

import classes from 'src/ui/common/components/Chip/Chip.module.scss';

type Props = {
  text: string;
};

const Chip: React.FC<Props> = ({ text }) => (
  <div className={classes.Chip}>
    <span className={cn(classes.Chip__Text)}>{text}</span>
  </div>
);

export default Chip;
