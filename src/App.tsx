import React from 'react';
import photo from 'src/assets/images/photo.jpg';
import 'src/App.scss';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <img className={"app-photo"} src={photo}/>
        <div>Common info</div>
      </header>
      <div>Tabs</div>
      <footer>Footer</footer>
    </div>
  );
}

export default App;
