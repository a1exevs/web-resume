import React from "react";
import classes from "./ArrayView.module.scss";
import cn from "classnames";

type Props = {
  items: string[],
  itemPaddingPx?: number,
  columnsCount?: number | ''
}

const columnsCountKey = '--columns-count' as any

const ArrayView: React.FC<Props> = ({ items, itemPaddingPx, columnsCount = ''}) => {
  return (
    <div style={{[columnsCountKey]: `${columnsCount}`}} className={classes.ArrayView}>
      { items.map((item) =>
        <label className={cn(classes.ArrayView__Item, 'Title')}
               style={{ padding: `${itemPaddingPx}px` }}>
          {item}
        </label>) }
    </div>
  )
}

export default ArrayView;
