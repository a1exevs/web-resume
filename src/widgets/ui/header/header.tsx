import React, { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router';

import logo from 'src/logo.svg';
import { Icon, IconName, LanguageCode, languageCodes, Option, RoutePath, Select, useLangContext } from 'src/shared';
import classes from 'src/widgets/ui/header/header.module.scss';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const { langCode, currentLang, setCurrentLang } = useLangContext();
  const options: Option[] = languageCodes.map(code => ({ label: currentLang.langs[code], value: code }));

  // TODO Move to consts
  const LINKS = [
    { to: RoutePath.HOME, label: `/${currentLang.routes.HOME}` },
    { to: RoutePath.EXPERIENCE, label: `/${currentLang.routes.EXPERIENCE}` },
    { to: RoutePath.SKILLS, label: `/${currentLang.routes.SKILLS}` },
    { to: RoutePath.PROJECTS, label: `/${currentLang.routes.PROJECTS}` },
    { to: RoutePath.CONTACTS, label: `/${currentLang.routes.CONTACTS}` },
  ];

  // TODO move to HeaderContainer
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

  const handleNavClick = () => setIsMenuOpen(false);

  const onCurrentLangChange = (code: string): void => {
    setCurrentLang(code as LanguageCode);
  };

  return (
    <header className={classes.Header}>
      <div className={classes.Header__LeftBlock}>
        <img alt="logo" src={logo} width={64} />
        <h1 className={classes.Header__LogoText}>{currentLang.labels.APP_NAME.replace(' ', '\n')}</h1>
      </div>

      {/* Desktop navigation */}
      <div className={classes.Header__NavLinks}>
        {LINKS.map(link => (
          <NavLink key={link.to} className={classes.Header__NavLink} to={link.to}>
            {link.label}
          </NavLink>
        ))}
      </div>

      <div className={classes.Header__RightBlock}>
        {/* Mobile menu */}
        <Select value={langCode} onChange={onCurrentLangChange} options={options} />

        <div className={classes.Header__Menu} ref={menuRef}>
          <button
            type="button"
            aria-haspopup="menu"
            aria-expanded={isMenuOpen}
            aria-label="Open menu"
            onClick={() => setIsMenuOpen(open => !open)}
            className={classes.Header__MenuButton}
          >
            <Icon icon={IconName.MENU} />
          </button>
          {isMenuOpen && (
            <div className={classes.Header__MenuItemsWrapper}>
              <nav className={classes.Header__MenuItems} role="menu">
                {LINKS.map(link => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    onClick={handleNavClick}
                    className={classes.Header__MenuItem}
                    role="menuitem"
                  >
                    {link.label}
                  </NavLink>
                ))}
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
