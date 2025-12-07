import React, { RefObject } from 'react';
import { NavLink } from 'react-router';

import logo from 'src/logo.svg';
import { Icon, IconName, LanguageCode, Option, RoutePath } from 'src/shared';
import { SelectCombobox } from 'src/shared/ui';
import classes from 'src/widgets/ui/header/header.module.scss';

type Props = {
  title: string;
  links: { to: RoutePath; label: string }[];
  langCode: LanguageCode;
  langOptions: Option[];
  onCurrentLangChange: (code: string) => void;
  menuRef: RefObject<HTMLDivElement>;
  isMenuOpen: boolean;
  toggleMenu: () => void;
  closeMenu: () => void;
};

const Header: React.FC<Props> = ({
  title,
  links,
  langCode,
  langOptions,
  onCurrentLangChange,
  menuRef,
  isMenuOpen,
  toggleMenu,
  closeMenu,
}) => {
  return (
    <header className={classes.Header}>
      <div className={classes.Header__LeftBlock}>
        <img alt="logo" src={logo} width={64} />
        <h1 className={classes.Header__LogoText}>{title}</h1>
      </div>

      {/* Desktop navigation */}
      <div className={classes.Header__NavLinks}>
        {links.map(link => (
          <NavLink key={link.to} className={classes.Header__NavLink} to={link.to}>
            {link.label}
          </NavLink>
        ))}
      </div>

      <div className={classes.Header__RightBlock}>
        {/* Mobile menu */}
        <SelectCombobox value={langCode} onChange={onCurrentLangChange} options={langOptions} />

        <div className={classes.Header__Menu} ref={menuRef}>
          <button
            type="button"
            aria-haspopup="menu"
            aria-expanded={isMenuOpen}
            aria-label="Open menu"
            onClick={toggleMenu}
            className={classes.Header__MenuButton}
          >
            <Icon icon={IconName.MENU} />
          </button>
          {isMenuOpen && (
            <div className={classes.Header__MenuItemsWrapper}>
              <nav className={classes.Header__MenuItems} role="menu">
                {links.map(link => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    onClick={closeMenu}
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
