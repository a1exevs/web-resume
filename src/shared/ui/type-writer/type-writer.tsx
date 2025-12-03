import cn from 'classnames';
import React, { useEffect, useState } from 'react';

import { TYPE_WRITER_CURSOR_SYMBOL, TYPE_WRITER_DEFAULT_DELAY } from 'src/shared/ui/type-writer/type-writer.consts';
import classes from 'src/shared/ui/type-writer/type-writer.module.scss';
import Typography from 'src/shared/ui/typography/typography';
import { TypographyVariant } from 'src/shared/ui/typography/typography.types';

type Props = {
  text: string;
  delay?: number;
  className?: string;
  variant?: TypographyVariant;
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
    <Typography variant={variant} className={cn(classes.TypeWriter, className)}>
      {currentText}
      <span className={classes.TypeWriter__Cursor}>{TYPE_WRITER_CURSOR_SYMBOL}</span>
    </Typography>
  );
};

export default TypeWriter;
