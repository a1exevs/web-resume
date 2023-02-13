import React from 'react';
import photo from 'src/assets/images/photo.jpg';
import 'src/App.scss';
import CommonInfo from "./ui/CommonInfo/CommonInfo";
import Content from "./ui/Content/Comtent";
import Footer from "./ui/Footer/Footer";
import Header from "./ui/Header/Header";
import {CommonInfoData, ContentData, FooterData, HeaderData} from "./store/store.types";
import store from "./store/store";

type Props = {
  headerData: HeaderData;
  commonInfoData: CommonInfoData,
  contentData: ContentData,
  footerData: FooterData,
}

const AppContainer: React.FC<Props> = (props) => {
  return (
    <div className="App">
      <Header data={props.headerData}/>
      <CommonInfo photo={photo}/>
      <Content/>
      <Footer/>
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
