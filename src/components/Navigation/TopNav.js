import React from 'react';

import { useToggleState } from 'Hooks';

import { Menu } from './Menu';
import { NavLink } from './NavLink';
import { Nav } from './style';

const Links = ({ onClick }) => (
  <>
    <NavLink onClick={onClick} to="/">
      Home
    </NavLink>
    <NavLink onClick={onClick} to="/aboutus">
      About Us
    </NavLink>
    <NavLink onClick={onClick} to="/wedding">
      Wedding
    </NavLink>
    <NavLink onClick={onClick} to="/lodging">
      Lodging
    </NavLink>
    <NavLink onClick={onClick} to="/activities">
      Activities
    </NavLink>
    <NavLink onClick={onClick} to="/RSVP">
      RSVP
    </NavLink>
    <NavLink onClick={onClick} to="registry">
      Registry
    </NavLink>
  </>
);

export const TopNav = () => {
  const [isMenuOpen, toggleMenu] = useToggleState(false);

  return (
    <Nav>
      <div className="links">
        <Links />
      </div>
      <Menu isOpen={isMenuOpen} open={toggleMenu}>
        <Links onClick={toggleMenu} />
      </Menu>
    </Nav>
  );
};
