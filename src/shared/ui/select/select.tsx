import cn from 'classnames';
import React, { ChangeEvent, FocusEvent, KeyboardEvent, MouseEvent, useState } from 'react';

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
  const [open, setOpen] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLSelectElement>): void => {
    onChange(e.target.value);
    setOpen(false);
  };

  const handleMouseDown = (_: MouseEvent<HTMLSelectElement>): void => {
    setOpen(true);
  };

  const handleBlur = (_: FocusEvent<HTMLSelectElement>): void => {
    setOpen(false);
  };

  const handleKeyDown = (_: KeyboardEvent<HTMLSelectElement>): void => {
    setOpen(true);
  };

  return (
    <select
      className={cn(classes.Select, className, {
        [classes.Select_open]: open,
      })}
      value={value}
      onMouseDown={handleMouseDown}
      onKeyDown={handleKeyDown}
      onBlur={handleBlur}
      onChange={handleChange}
      onSelect={handleChange}
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
