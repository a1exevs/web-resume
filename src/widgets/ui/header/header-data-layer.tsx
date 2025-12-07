import React from 'react';

import { LanguageCode, languageCodes, Option, RoutePath, useLangContext } from 'src/shared';
import HeaderLogicLayer from 'src/widgets/ui/header/header-logic-layer';

const HeaderDataLayer: React.FC = () => {
  const { langCode, currentLang, setCurrentLang } = useLangContext();
  const langOptions: Option[] = languageCodes.map(code => ({
    label: currentLang.langs[code],
    value: code,
  }));
  const langMobileOptions: Option[] = languageCodes.map(code => ({
    label: currentLang.shortLangs[code],
    value: code,
  }));

  const links = [
    { to: RoutePath.HOME, label: `/${currentLang.routes.HOME}` },
    { to: RoutePath.EXPERIENCE, label: `/${currentLang.routes.EXPERIENCE}` },
    { to: RoutePath.SKILLS, label: `/${currentLang.routes.SKILLS}` },
    { to: RoutePath.PROJECTS, label: `/${currentLang.routes.PROJECTS}` },
    { to: RoutePath.CONTACTS, label: `/${currentLang.routes.CONTACTS}` },
  ];

  const onCurrentLangChange = (code: string): void => {
    setCurrentLang(code as LanguageCode);
  };
  const title = currentLang.labels.APP_NAME.replace(' ', '\n');

  return (
    <HeaderLogicLayer
      title={title}
      links={links}
      langCode={langCode}
      langOptions={langOptions}
      langMobileOptions={langMobileOptions}
      onCurrentLangChange={onCurrentLangChange}
    />
  );
};

export default HeaderDataLayer;
