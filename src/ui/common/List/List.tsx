import React from "react";
import classes from "src/ui/common/List/List.module.scss";
import cn from "classnames";

type Props = {
  items: { name: string; value: string }[],
  withMinWith?: boolean
}

const List: React.FC<Props> = ({ items = [], withMinWith = true }) => {
  return (
    <React.Fragment>
      <ul className={cn(classes.List, { [classes.List_withMinWith]: withMinWith} )}>
        {items.map((item) =>
          <li className={classes.List__Item}>
            <label className={classes.List__ItemName}>{item.name}</label>
            <label className={classes.List__ItemValue}>{item.value}</label>
          </li>)
        }
      </ul>
    </React.Fragment>
  )
}

export default List;
