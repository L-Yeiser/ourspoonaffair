import React, { useState } from 'react';

import { MenuButton } from './MenuButton/index';
import { Dropdown } from './Dropdown/index';

import { NavLink } from './NavLink';
import { Nav } from './style';

export const NavBar = () => {
  const [isMenuOpen, toggleMenu] = useState(false);

  return (
    <Nav>
      <div className="links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/RSVP">RSVP</NavLink>
        <NavLink to="/events">Events</NavLink>
        <NavLink to="/travel">Travel</NavLink>
        <NavLink to="/thingsToDo">Things to Do</NavLink>
        <NavLink to="registry">Registry</NavLink>
      </div>
      <div className="menu">
        <MenuButton isOpen={isMenuOpen} open={toggleMenu} />
        <Dropdown isOpen={isMenuOpen} />
      </div>
    </Nav>
  );
};
