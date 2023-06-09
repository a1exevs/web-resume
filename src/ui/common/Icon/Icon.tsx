import React from 'react';

export enum IconName {
  TECHNICAL_SHILLS = 'TECHNICAL_SHILLS',
  CAREER_HISTORY = 'CAREER_HISTORY',
  PERSONAL_INFORMATION = 'PERSONAL_INFORMATION',
}

const getIconPath = (iconName: IconName): React.JSX.Element => {
  switch (iconName) {
    case IconName.TECHNICAL_SHILLS: {
      return (
        <path d="M12 3 1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"></path>
      );
    }
    case IconName.CAREER_HISTORY: {
      return <path d="M12 7.77 18.39 18H5.61L12 7.77M12 4 2 20h20L12 4z"></path>;
    }
    case IconName.PERSONAL_INFORMATION: {
      return (
        <path d="M11 23.59v-3.6c-5.01-.26-9-4.42-9-9.49C2 5.26 6.26 1 11.5 1S21 5.26 21 10.5c0 4.95-3.44 9.93-8.57 12.4l-1.43.69zM11.5 3C7.36 3 4 6.36 4 10.5S7.36 18 11.5 18H13v2.3c3.64-2.3 6-6.08 6-9.8C19 6.36 15.64 3 11.5 3zm-1 11.5h2v2h-2zm2-1.5h-2c0-3.25 3-3 3-5 0-1.1-.9-2-2-2s-2 .9-2 2h-2c0-2.21 1.79-4 4-4s4 1.79 4 4c0 2.5-3 2.75-3 5z"></path>
      );
    }
    default: {
      return <div></div>;
    }
  }
};

type IconProps = {
  name: IconName;
  width?: string;
  height?: string;
  color?: string;
};

export const Icon: React.FC<IconProps> = ({
  name,
  width = '1.5em',
  height = '1.5em',
  color = 'currentColor',
  ...rest
}) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={width} height={height} fill={color} {...rest}>
      {getIconPath(name)}
    </svg>
  );
};
