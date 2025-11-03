import cn from 'classnames';
import React, { PropsWithChildren, useEffect, useState } from 'react';

import { TYPE_WRITER_CURSOR_SYMBOL, TYPE_WRITER_DEFAULT_DELAY } from 'src/shared/ui/type-writer/type-writer.consts';
import classes from 'src/shared/ui/type-writer/type-writer.module.scss';
import { TypeWriterVariant } from 'src/shared/ui/type-writer/type-writer.types';

type Props = {
  text: string;
  delay?: number;
  className?: string;
  variant?: TypeWriterVariant;
};

const TypeWriterInner: React.FC<PropsWithChildren<{ className: string; variant: TypeWriterVariant }>> = ({
  className = '',
  variant = 'span',
  children,
}) => {
  return (
    <>
      {variant === 'h2' && <h2 className={className}>{children}</h2>}
      {variant === 'h3' && <h3 className={className}>{children}</h3>}
      {variant === 'p' && <p className={className}>{children}</p>}
      {variant === 'span' && <span className={className}>{children}</span>}
    </>
  );
};

const TypeWriter: React.FC<Props> = ({ text, delay = TYPE_WRITER_DEFAULT_DELAY, className = '', variant = 'span' }) => {
  const [currentText, setCurrentText] = useState<string>('');
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText(prevText => prevText + text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, delay);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, delay, text]);

  return (
    <TypeWriterInner variant={variant} className={cn(classes.TypeWriter, className)}>
      {currentText}
      <span className={classes.TypeWriter__Cursor}>{TYPE_WRITER_CURSOR_SYMBOL}</span>
    </TypeWriterInner>
  );
};

export default TypeWriter;
