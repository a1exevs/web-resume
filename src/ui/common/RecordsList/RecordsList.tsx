import React from "react";
import classes from "src/ui/common/RecordsList/RecordsList.module.scss";
import cn from "classnames";

type Props = {
  items: { name: string; value: string }[],
  withMinWith?: boolean
}

const RecordsList: React.FC<Props> = ({ items = [], withMinWith = true }) => {
  return (
    <div className={classes.RecordList}>
      <ul className={cn(classes.RecordList__Content, { [classes.RecordList__Content_withMinWith]: withMinWith} )}>
        {items.map((item) =>
          <li className={classes.RecordList__ContentItem}>
            <label className={classes.RecordList__ContentItemName}>{item.name}</label>
            <label className={classes.RecordList__ContentItemValue}>{item.value}</label>
          </li>)
        }
      </ul>
    </div>
  )
}

export default RecordsList;
