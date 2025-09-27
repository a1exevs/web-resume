import React from 'react';

import 'src/App.scss';
import store from 'src/store/store';
import { CommonInfoData, ContentData, FooterData, HeaderData } from 'src/store/store.types';
import Header from 'src/ui/Header/Header';
import { Outlet } from 'react-router';

type Props = {
  headerData: HeaderData;
  commonInfoData: CommonInfoData;
  contentData: ContentData;
  footerData: FooterData;
};

const AppContainer: React.FC<Props> = ({ headerData, commonInfoData }) => (
  <div className="App">
    <div className="App__Canvas"></div>
    <div className="App__Content">
      <Header data={headerData} />
      <Outlet />
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
