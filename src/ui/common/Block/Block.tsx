import React from 'react';
import classes from 'src/ui/common/Block/Block.module.scss';
import cn from 'classnames';

type Props = {
  withoutSpaces?: boolean;
  children: React.ReactNode;
};

const Block = ({children, withoutSpaces = false}: Props) => {
  return <div className={cn(classes.Block, {[classes.Block_withoutSpaces]: withoutSpaces})}>{children}</div>;
};

export default Block;
