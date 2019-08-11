import React from 'react';

import { useToggleState } from 'Hooks';

import { Menu } from './Menu';
import { NavLink } from './NavLink';
import { Nav } from './style';

const Links = () => (
  <>
    <NavLink to="/">Home</NavLink>
    <NavLink to="/RSVP">RSVP</NavLink>
    <NavLink to="/events">Events</NavLink>
    <NavLink to="/travel">Travel</NavLink>
    <NavLink to="/thingsToDo">Things to Do</NavLink>
    <NavLink to="registry">Registry</NavLink>
  </>
);

export const NavBar = () => {
  const [isMenuOpen, toggleMenu] = useToggleState(false);

  return (
    <Nav>
      <div className="links">
        <Links />
      </div>
      <Menu isOpen={isMenuOpen} open={toggleMenu}>
        <Links />
      </Menu>
    </Nav>
  );
};
