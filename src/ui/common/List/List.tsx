import React from "react";
import classes from "src/ui/common/List/List.module.scss";
import cn from "classnames";

type Props = {
  items: { name: string; value: string }[],
  withMinWith?: boolean
}

const List: React.FC<Props> = ({ items = [], withMinWith = true }) => {
  return (
    <div className={classes.List}>
      <ul className={cn(classes.List__Content, { [classes.List__Content_withMinWith]: withMinWith} )}>
        {items.map((item) =>
          <li className={classes.List__ContentItem}>
            <label className={classes.List__ContentItemName}>{item.name}</label>
            <label className={classes.List__ContentItemValue}>{item.value}</label>
          </li>)
        }
      </ul>
    </div>
  )
}

export default List;
