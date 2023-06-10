import cn from 'classnames';
import React from 'react';

import classes from 'src/ui/common/components/SimpleList/SimpleList.module.scss';

type Props = {
  items: string[];
};

const SimpleList: React.FC<Props> = ({ items = [] }) => (
  <div className={classes.SimpleList}>
    <ul className={cn(classes.SimpleList__Content)}>
      {items.map((item, index) => (
        <li key={index} className={classes.SimpleList__ContentItem}>
          <label className={classes.SimpleList__ContentItemValue}>{item}</label>
        </li>
      ))}
    </ul>
  </div>
);

export default SimpleList;
