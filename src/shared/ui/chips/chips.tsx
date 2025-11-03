import React, { CSSProperties } from 'react';

import Chip from 'src/shared/ui/chip/chip';
import classes from 'src/shared/ui/chips/chips.module.scss';

type Props = {
  items: string[];
  itemPaddingPx?: number;
  columnsCount?: number | '';
};

const columnsCountKey = '--columns-count';

const Chips: React.FC<Props> = ({ items, columnsCount = '' }) => (
  <div style={{ [columnsCountKey]: `${columnsCount}` } as CSSProperties} className={classes.Chips}>
    {items.map(item => (
      <Chip key={item} text={item} />
    ))}
  </div>
);

export default Chips;
