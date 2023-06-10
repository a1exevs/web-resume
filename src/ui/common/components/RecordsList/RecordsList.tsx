import cn from 'classnames';
import React from 'react';

import classes from 'src/ui/common/components/RecordsList/RecordsList.module.scss';

type Props = {
  items: { name: string; value: string }[];
  withMinWith?: boolean;
};

const RecordsList: React.FC<Props> = ({ items = [], withMinWith = true }) => (
  <div className={classes.RecordList}>
    <ul className={cn(classes.RecordList__Content, { [classes.RecordList__Content_withMinWith]: withMinWith })}>
      {items.map((item, index) => (
        <li key={index} className={classes.RecordList__ContentItem}>
          <label className={classes.RecordList__ContentItemName}>{item.name}</label>
          <label className={classes.RecordList__ContentItemValue}>{item.value}</label>
        </li>
      ))}
    </ul>
  </div>
);

export default RecordsList;
