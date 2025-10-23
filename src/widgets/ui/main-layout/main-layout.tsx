import React, { ReactNode } from 'react';

import classes from 'src/widgets/ui/main-layout/main-layout.module.scss';

type Props = {
  children: ReactNode;
};

const MainLayout: React.FC<Props> = ({ children }) => (
  <main className={classes.MainLayout}>
    <div className={classes.MainLayout__Wrapper}>{children}</div>
  </main>
);

export default MainLayout;
