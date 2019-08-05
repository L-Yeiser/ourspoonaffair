import React, { useState } from 'react';

import { MenuToggle } from './MenuToggle';
import { NavLink } from './NavLink';
import { TopNav } from './TopNav';
import { Dropdown } from './Dropdown';

export const NavBar = () => {
  const [isMenuOpen, toggleMenu] = useState(false);

  return (
    <TopNav>
      <div className="links">
        <NavLink to="/RSVP">RSVP</NavLink>
        <NavLink to="/events">Events</NavLink>
        <NavLink to="/travel">Travel</NavLink>
        <NavLink to="/thingsToDo">Things to Do</NavLink>
        <NavLink to="registry">Registry</NavLink>
      </div>
      <div className="menu">
        <MenuToggle isOpen={isMenuOpen} open={toggleMenu} />
        <Dropdown />
      </div>
    </TopNav>
  );
};
