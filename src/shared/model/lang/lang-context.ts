import { createContext } from 'react';

import { defaultLang, defaultLangCode } from 'src/shared/model/lang/lang.consts';
import { LangContext as Context } from 'src/shared/model/lang/lang.types';

const defaultContext: Context = {
  langCode: defaultLangCode,
  currentLang: defaultLang,
  setCurrentLang: () => {},
};

export const LangContext = createContext<Context>(defaultContext);

export const CURRENT_LANG_KEY = 'currentLangKey';
