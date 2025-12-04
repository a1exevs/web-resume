import { createContext } from 'react';

import { currentLang } from 'src/shared/model/lang/lang.helper';
import { LangContext as Context } from 'src/shared/model/lang/lang.types';

const defaultContext: Context = {
  langCode: 'en',
  currentLang: currentLang,
  setCurrentLang: () => {},
};

export const LangContext = createContext<Context>(defaultContext);

export const CURRENT_LANG_KEY = 'currentLangKey';
