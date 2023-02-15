import React from 'react';
import 'src/App.scss';
import CommonInfo from "src/ui/CommonInfo/CommonInfo";
import Content from "src/ui/Content/Comtent";
import Footer from "src/ui/Footer/Footer";
import Header from "src/ui/Header/Header";
import {CommonInfoData, ContentData, FooterData, HeaderData} from "src/store/store.types";
import store from "src/store/store";

type Props = {
  headerData: HeaderData;
  commonInfoData: CommonInfoData,
  contentData: ContentData,
  footerData: FooterData,
}

const AppContainer: React.FC<Props> = (props) => {
  return (
    <div className="App">
      <Header {...props.headerData}/>
      <CommonInfo {...props.commonInfoData}/>
      <Content {...props.contentData}/>
      <Footer {...props.footerData}/>
    </div>
  );
}

const App = () => {
  return (
    <React.StrictMode>
      <AppContainer headerData={store.header}
                    commonInfoData={store.commonInfo}
                    contentData={store.content}
                    footerData={store.footer}/>
    </React.StrictMode>
  )
}

export default App;
