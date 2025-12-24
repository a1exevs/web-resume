import React, { PropsWithChildren } from 'react';

import { TypographyVariant } from 'src/shared/ui/typography/typography.types';

type Props = { className: string; style?: React.CSSProperties; variant?: TypographyVariant };

const Typography: React.FC<PropsWithChildren<Props>> = ({ className = '', style = {}, variant = 'span', children }) => {
  return (
    <>
      {variant === 'h2' && (
        <h2 className={className} style={style}>
          {children}
        </h2>
      )}
      {variant === 'h3' && (
        <h3 className={className} style={style}>
          {children}
        </h3>
      )}
      {variant === 'h4' && (
        <h4 className={className} style={style}>
          {children}
        </h4>
      )}
      {variant === 'p' && (
        <p className={className} style={style}>
          {children}
        </p>
      )}
      {variant === 'span' && (
        <span className={className} style={style}>
          {children}
        </span>
      )}
    </>
  );
};

export default Typography;
