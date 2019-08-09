import React from 'react';

import { NavLink } from '../NavLink';
import { Container } from './style';

export const Dropdown = props => {
  return (
    <Container isOpen={props.isOpen}>
      <NavLink to="/RSVP">RSVP</NavLink>
      <NavLink to="/events">Events</NavLink>
      <NavLink to="/travel">Travel</NavLink>
      <NavLink to="/thingsToDo">Things to Do</NavLink>
      <NavLink to="registry">Registry</NavLink>
    </Container>
  );
};
