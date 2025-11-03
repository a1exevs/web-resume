import React from 'react';
import { Outlet } from 'react-router';

import classes from 'src/app/ui/app.module.scss';
import { ScanLine } from 'src/shared';
import { Header, MainLayout } from 'src/widgets';

const App: React.FC = () => (
  <div className={classes.App}>
    <div className={classes.App__Canvas}></div>
    <div className={classes.App__Wrapper}>
      <Header />
      <ScanLine />
      <MainLayout>
        <Outlet />
      </MainLayout>
    </div>
  </div>
);

export default App;
