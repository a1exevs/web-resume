import React from 'react';

import classes from 'src/ui/common/components/Card/Card.module.scss';

type Props = {
  children: React.ReactNode;
};

const Card = ({ children }: Props) => <div className={classes.Card}>{children}</div>;

export default Card;
