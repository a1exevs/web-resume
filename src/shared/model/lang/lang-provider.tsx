import React, { PropsWithChildren, useState } from 'react';

import { LangContext } from 'src/shared/model/lang/lang-context';
import { detectLangCode, getLangConstantsByCode, setUserLangCode } from 'src/shared/model/lang/lang.helper';
import { LanguageCode } from 'src/shared/model/lang/lang.types';

const LangProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [langCode, setLangCode] = useState<LanguageCode>(() => detectLangCode());

  const setCurrentLang = (langCode: LanguageCode): void => {
    setUserLangCode(langCode);
    setLangCode(langCode);
  };

  return (
    <LangContext.Provider
      value={{
        langCode,
        currentLang: getLangConstantsByCode(langCode),
        setCurrentLang,
      }}
    >
      {children}
    </LangContext.Provider>
  );
};

export default LangProvider;
