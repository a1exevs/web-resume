import cn from 'classnames';
import React, { CSSProperties } from 'react';

import classes from 'src/ui/common/ArrayView/ArrayView.module.scss';

type Props = {
  items: string[];
  itemPaddingPx?: number;
  columnsCount?: number | '';
};

const columnsCountKey = '--columns-count';

const ArrayView: React.FC<Props> = ({ items, itemPaddingPx, columnsCount = '' }) => (
  <div style={{ [columnsCountKey]: `${columnsCount}` } as CSSProperties} className={classes.ArrayView}>
    {items.map(item => (
      <label key={item} className={cn(classes.ArrayView__Item, 'Title')} style={{ padding: `${itemPaddingPx}px` }}>
        {item}
      </label>
    ))}
  </div>
);

export default ArrayView;
