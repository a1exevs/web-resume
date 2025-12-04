import React from 'react';

import classes from 'src/shared/ui/select//select.module.scss';
import { Option } from 'src/shared/ui/select/select.types';

type Props = {
  value: string;
  onChange: (value: string) => void;
  className?: string;
  options: Option[];
  disabled?: boolean;
};

const Select: React.FC<Props> = ({ value, onChange, options, className = '', disabled = false }) => {
  return (
    <select
      className={`${classes.Select} ${className}`}
      value={value}
      onChange={e => onChange(e.target.value)}
      disabled={disabled}
    >
      {options.map(opt => (
        <option key={opt.value} value={opt.value} className={classes.Select__Option}>
          {opt.label}
        </option>
      ))}
    </select>
  );
};

export default Select;
