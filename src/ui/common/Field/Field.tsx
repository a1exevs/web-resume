import cn from 'classnames';
import React from 'react';

import classes from 'src/ui/common/Field/Field.module.scss';

type Props = {
  label?: string;
  value: string;
  type?: 'inline' | 'block';
  isLink?: boolean;
};

const Field: React.FC<Props> = ({ label, value, type = 'inline', isLink = false }) => (
  <div className={cn(classes.Field, { [classes.Field_block]: type === 'block' })}>
    {label && (
      <label
        className={cn(classes.Field__Label, 'Label', {
          [classes.Field__Label_tinyRightPadding]: type === 'inline',
          [classes.Field__Label_tinyBottomPadding]: type === 'block',
        })}
      >
        {`${label}:`}
      </label>
    )}
    {isLink ? (
      <a className={cn(classes.Field__Value, 'Link')} title={value} href={value}>
        {value}
      </a>
    ) : (
      <span className={cn(classes.Field__Value, 'Text')} title={value}>
        {value}
      </span>
    )}
  </div>
);

export default Field;
