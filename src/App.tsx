import React from 'react';

import 'src/App.scss';
import store from 'src/store/store';
import { CommonInfoData, ContentData, FooterData, HeaderData } from 'src/store/store.types';
import CommonInfo from 'src/ui/CommonInfo/CommonInfo';
import Content from 'src/ui/Content/Comtent';
import Footer from 'src/ui/Footer/Footer';
import Header from 'src/ui/Header/Header';

type Props = {
  headerData: HeaderData;
  commonInfoData: CommonInfoData;
  contentData: ContentData;
  footerData: FooterData;
};

const AppContainer: React.FC<Props> = ({ headerData, commonInfoData, contentData, footerData }) => (
  <div className="App">
    <Header data={headerData} />
    <CommonInfo data={commonInfoData} />
    <Content data={contentData} />
    <Footer data={footerData} />
  </div>
);

const App = () => (
  <React.StrictMode>
    <AppContainer
      headerData={store.header}
      commonInfoData={store.commonInfo}
      contentData={store.content}
      footerData={store.footer}
    />
  </React.StrictMode>
);

export default App;
