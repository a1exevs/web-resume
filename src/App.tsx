import React from 'react';
import photo from 'src/assets/images/photo.jpg';
import 'src/App.scss';
import Header from "./ui/Header/Header";
import Content from "./ui/Content/Comtent";
import Footer from "./ui/Footer/Footer";

function App() {
  return (
    <div className="app">
      <Header photo={photo}/>
      <Content/>
      <Footer/>
    </div>
  );
}

export default App;
