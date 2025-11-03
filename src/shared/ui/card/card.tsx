import React from 'react';

import classes from 'src/shared/ui/card/card.module.scss';

type Props = {
  children: React.ReactNode;
};

const Card = ({ children }: Props) => <div className={classes.Card}>{children}</div>;

export default Card;
