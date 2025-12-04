import React from 'react';

import { Option } from 'src/shared/ui/select/select.types';

type Props = {
  value: string;
  onChange: (value: string) => void;
  className?: string;
  options: Option[];
};

const Select: React.FC<Props> = ({ value, onChange, options, className = '' }) => {
  return (
    <select
      className={`border rounded-lg px-3 py-2 bg-white text-black ${className}`}
      value={value}
      onChange={e => onChange(e.target.value)}
    >
      {options.map(opt => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  );
};

export default Select;
