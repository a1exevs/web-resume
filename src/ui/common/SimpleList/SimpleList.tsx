import React from 'react';
import classes from './SimpleList.module.scss';
import cn from 'classnames';

type Props = {
  items: string[];
};

const SimpleList: React.FC<Props> = ({items = []}) => {
  return (
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
};

export default SimpleList;
