import React from 'react';
import classes from './Block.module.scss';

type Props = {
  children: React.ReactNode;
}

const Block = ({children}: Props) => {
  return (
    <div className={classes.Block}>
      {children}
    </div>
  );
};

export default Block;
