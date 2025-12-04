import React from 'react';

import MainWindow from 'src/app/ui/main-window';
import { LangProvider } from 'src/shared';

const App: React.FC = () => {
  return (
    <LangProvider>
      <MainWindow />
    </LangProvider>
  );
};

export default App;
