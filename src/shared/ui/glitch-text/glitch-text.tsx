import React, { PropsWithChildren } from 'react';

import classes from 'src/shared/ui/glitch-text/glitch-text.module.scss';
import { Intensity } from 'src/shared/ui/glitch-text/glitch-text.types';
import Typography from 'src/shared/ui/typography/typography';
import { TypographyVariant } from 'src/shared/ui/typography/typography.types';

type Props = {
  className?: string;
  intensity?: Intensity;
  variant?: TypographyVariant;
};

const GlitchText: React.FC<PropsWithChildren<Props>> = ({
  children,
  className = '',
  intensity = 'medium',
  variant,
}) => {
  const animationDuration = {
    low: '20s',
    medium: '15s',
    high: '5s',
  };

  return (
    <Typography
      className={`${classes.GlitchText} ${className}`}
      style={{
        animationDuration: `${animationDuration[intensity]}`,
      }}
      variant={variant}
    >
      {children}
    </Typography>
  );
};

export default GlitchText;
