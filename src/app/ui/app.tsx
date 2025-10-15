import React from 'react';
import { Outlet } from 'react-router';

import classes from 'src/app/ui/app.module.scss';
import store from 'src/store/store';
import { CommonInfoData, ContentData, FooterData, HeaderData } from 'src/store/store.types';
import { Header, MainLayout } from 'src/widgets';

type Props = {
  headerData: HeaderData;
  commonInfoData: CommonInfoData;
  contentData: ContentData;
  footerData: FooterData;
};

const AppContainer: React.FC<Props> = ({ headerData }) => (
  <div className={classes.App}>
    <div className={classes.App__Canvas}></div>
    <div className={classes.App__Wrapper}>
      <Header data={headerData} />
      <MainLayout>
        <Outlet />
      </MainLayout>
    </div>
  </div>
);

const App: React.FC = () => (
  <AppContainer
    headerData={store.header}
    commonInfoData={store.commonInfo}
    contentData={store.content}
    footerData={store.footer}
  />
);

export default App;
