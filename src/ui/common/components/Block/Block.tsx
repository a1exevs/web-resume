import cn from 'classnames';
import React from 'react';

import classes from 'src/ui/common/components/Block/Block.module.scss';

type Props = {
  withoutSpaces?: boolean;
  children: React.ReactNode;
};

const Block = ({ children, withoutSpaces = false }: Props) => (
  <div className={cn(classes.Block, { [classes.Block_withoutSpaces]: withoutSpaces })}>{children}</div>
);

export default Block;
