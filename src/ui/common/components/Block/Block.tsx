import cn from 'classnames';
import React from 'react';

import classes from 'src/ui/common/components/Block/Block.module.scss';

type Props = {
  withoutSpaces?: boolean;
  children: React.ReactNode;
  inline?: boolean;
};

const Block = ({ children, withoutSpaces = false, inline = false }: Props) => (
  <div
    className={cn(classes.Block, {
      [classes.Block_withoutSpaces]: withoutSpaces,
      [classes.Block_inline]: inline,
    })}
  >
    {children}
  </div>
);

export default Block;
