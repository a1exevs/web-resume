import React, { useEffect, useRef, useState } from 'react';

import { LanguageCode, Option, RoutePath, SM_PX, useScreenWidthLessThen } from 'src/shared';
import Header from 'src/widgets/ui/header/header';

type Props = {
  title: string;
  links: { to: RoutePath; label: string }[];
  langCode: LanguageCode;
  langOptions: Option[];
  langMobileOptions: Option[];
  onCurrentLangChange: (code: string) => void;
};

const HeaderLogicLayer: React.FC<Props> = ({
  title,
  links,
  langCode,
  langOptions,
  langMobileOptions,
  onCurrentLangChange,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const isMobile = useScreenWidthLessThen(SM_PX);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!isMenuOpen) {
        return;
      }
      if (menuRef?.current && !menuRef?.current?.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  const toggleMenu = (): void => {
    setIsMenuOpen(open => !open);
  };

  return (
    <Header
      title={title}
      links={links}
      langCode={langCode}
      langOptions={isMobile ? langMobileOptions : langOptions}
      onCurrentLangChange={onCurrentLangChange}
      menuRef={menuRef}
      isMenuOpen={isMenuOpen}
      toggleMenu={toggleMenu}
      closeMenu={closeMenu}
    />
  );
};

export default HeaderLogicLayer;
