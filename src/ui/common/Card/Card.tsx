import React from 'react';
import classes from './Card.module.scss';

type Props = {
  children: React.ReactNode;
}

const Card = ({children}: Props) => {
  return (
    <div className={classes.Card}>
      {children}
    </div>
  );
};

export default Card;
