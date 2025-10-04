import React, { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router';

import logo from 'src/logo.svg';
import { HeaderData } from 'src/store/store.types';

// TODO: [REDESIGN] Rewrite without tailwing

type Props = { data: HeaderData };

const Header: React.FC<Props> = ({ data }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const links = [
    { to: '/', label: '/Home' },
    { to: '/experience', label: '/Experience' },
    { to: '/skills', label: '/Skills' },
    { to: '/projects', label: '/Projects' },
    { to: '/contacts', label: '/Contacts' },
  ];

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
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-[#273a27] px-10 py-3">
      <div className="flex items-center gap-3 text-[var(--primary-color)]">
        <img alt="logo" src={logo} width={48} />
        <h1 className="glitch text-xl font-bold tracking-widest">Web-resume</h1>
      </div>

      {/* Desktop navigation */}
      <div className="hidden items-center gap-8 md:flex">
        {links.map(link => (
          <NavLink
            key={link.to}
            className="text-sm font-medium text-white/80 transition-colors hover:text-[var(--primary-color)]"
            to={link.to}
          >
            {link.label}
          </NavLink>
        ))}
      </div>

      <div className="flex items-center gap-4">
        {/* Mobile menu */}
        <div className="relative md:hidden z-10" ref={menuRef}>
          <button
            type="button"
            aria-haspopup="menu"
            aria-expanded={isMenuOpen}
            aria-label="Open menu"
            onClick={() => setIsMenuOpen(open => !open)}
            className="flex cursor-pointer items-center justify-center rounded-sm bg-[#273a27] p-2 text-white transition-colors hover:bg-[var(--primary-color)]"
          >
            <span className="material-symbols-outlined"> menu </span>
          </button>
          {isMenuOpen && (
            <div className="absolute right-0 top-full mt-2 w-56 border border-[#273a27] bg-black/90 backdrop-blur-sm shadow-lg">
              <nav className="flex flex-col" role="menu">
                {links.map(link => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    onClick={handleNavClick}
                    className="block px-4 py-2 text-sm font-medium text-white/80 transition-colors hover:bg-white/5 hover:text-[var(--primary-color)]"
                    role="menuitem"
                  >
                    {link.label}
                  </NavLink>
                ))}
              </nav>
            </div>
          )}
        </div>

        <img
          alt=""
          className="hidden h-10 w-10 rounded-full border-2 border-[var(--primary-color)] bg-cover bg-center bg-no-repeat sm:block"
          src={data.photoPath}
        ></img>
      </div>
    </header>
  );
};

export default Header;
