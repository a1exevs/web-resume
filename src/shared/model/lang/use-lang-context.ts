import { useContext } from 'react';

import { LangContext } from 'src/shared/model/lang/lang-context';

const useLangContext = () => {
  return useContext(LangContext);
};

export default useLangContext;
