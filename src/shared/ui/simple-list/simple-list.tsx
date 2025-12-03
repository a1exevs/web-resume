import { isEmpty } from '@alexevs/ts-guards';
import cn from 'classnames';
import React from 'react';

import classes from 'src/shared/ui/simple-list/simple-list.module.scss';

type Props = {
  items: string[];
  className?: string;
};

const SimpleList: React.FC<Props> = ({ items = [], className = '' }) => (
  <div className={cn(classes.SimpleList, isEmpty(className) ? '' : className)}>
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
