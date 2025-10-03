import React from 'react';
import { NavLink } from 'react-router';

import { HeaderData } from 'src/store/store.types';

// TODO: [REDESIGN] Rewrite without tailwing

type Props = { data: HeaderData };

const Header: React.FC<Props> = ({ data }) => (
  <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-[#273a27] px-10 py-3">
    <div className="flex items-center gap-3 text-[var(--primary-color)]">
      <span className="material-symbols-outlined text-2xl"> data_object </span>
      <h1 className="glitch text-xl font-bold uppercase tracking-widest">RESUME.HTML</h1>
    </div>
    <div className="hidden items-center gap-8 md:flex">
      <NavLink className="text-sm font-medium text-white/80 transition-colors hover:text-[var(--primary-color)]" to="/">
        /Home
      </NavLink>
      <NavLink
        className="text-sm font-medium text-white/80 transition-colors hover:text-[var(--primary-color)]"
        to="/experience"
      >
        /Experience
      </NavLink>
      <NavLink
        className="text-sm font-medium text-white/80 transition-colors hover:text-[var(--primary-color)]"
        to="/skills"
      >
        /Skills
      </NavLink>
      <NavLink
        className="text-sm font-medium text-white/80 transition-colors hover:text-[var(--primary-color)]"
        to="/projects"
      >
        /Projects
      </NavLink>
      <NavLink
        className="text-sm font-medium text-white/80 transition-colors hover:text-[var(--primary-color)]"
        to="/contacts"
      >
        /Contacts
      </NavLink>
    </div>
    <div className="flex items-center gap-4">
      <button className="flex cursor-pointer items-center justify-center rounded-sm bg-[#273a27] p-2 text-white transition-colors hover:bg-[var(--primary-color)] md:hidden">
        <span className="material-symbols-outlined"> menu </span>
      </button>
      <img
        alt=""
        className="hidden h-10 w-10 rounded-full border-2 border-[var(--primary-color)] bg-cover bg-center bg-no-repeat sm:block"
        src={data.photoPath}
      ></img>
    </div>
  </header>
);

export default Header;
