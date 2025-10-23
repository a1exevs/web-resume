import React, { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router';

import logo from 'src/logo.svg';
import { RoutePath } from 'src/shared';
import classes from 'src/widgets/ui/header/header.module.scss';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // TODO Move to consts
  const LINKS = [
    { to: RoutePath.HOME, label: '/Home' },
    { to: RoutePath.EXPERIENCE, label: '/Experience' },
    { to: RoutePath.SKILLS, label: '/Skills' },
    { to: RoutePath.PROJECTS, label: '/Projects' },
    { to: RoutePath.CONTACTS, label: '/Contacts' },
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

  return (
    <header className={classes.Header}>
      <div className={classes.Header__LeftBlock}>
        <img alt="logo" src={logo} width={64} />
        <h1 className={classes.Header__LogoText}>
          <div>Web</div>
          <div>Resume</div>
        </h1>
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
        <div className={classes.Header__Menu} ref={menuRef}>
          <button
            type="button"
            aria-haspopup="menu"
            aria-expanded={isMenuOpen}
            aria-label="Open menu"
            onClick={() => setIsMenuOpen(open => !open)}
            className={classes.Header__MenuButton}
          >
            <span className="material-symbols-outlined"> menu </span>
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
