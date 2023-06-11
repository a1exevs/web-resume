import React, { CSSProperties } from 'react';

import Chip from 'src/ui/common/components/Chip/Chip';
import classes from 'src/ui/common/components/Chips/Chips.module.scss';

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
