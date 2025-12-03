import cn from 'classnames';
import React from 'react';

import classes from 'src/shared/ui/field/field.module.scss';

type Props = {
  label?: string;
  value: string;
  /**
   * Orientation of field label and value
   * For mobile version orientation always is 'column'
   */
  orientation?: 'row' | 'column';
  isLink?: boolean;
  withoutHSpace?: boolean;
  withoutVSpace?: boolean;
};
const Field: React.FC<Props> = ({
  label,
  value,
  orientation = 'row',
  isLink = false,
  withoutHSpace = false,
  withoutVSpace = false,
}) => (
  <div
    className={cn(classes.Field, {
      [classes.Field_block]: orientation === 'column',
      [classes.Field_withoutHMargin]: withoutHSpace,
      [classes.Field_withoutVMargin]: withoutVSpace,
    })}
  >
    {label && <label className={cn(classes.Field__Label, 'Label', 'Label_keepWordBreak')}>{`${label}:`}</label>}
    {isLink ? (
      <a className={cn(classes.Field__Value, 'Link')} title={value} href={value} rel="noopener noreferrer">
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
