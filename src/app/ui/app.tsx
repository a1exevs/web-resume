import React from 'react';

import MainWindow from 'src/app/ui/main-window';
import { LangProvider, MatrixCanvas } from 'src/shared';

const App: React.FC = () => {
  return (
    <LangProvider>
      <>
        <MainWindow />
        <MatrixCanvas />
      </>
    </LangProvider>
  );
};

export default App;
