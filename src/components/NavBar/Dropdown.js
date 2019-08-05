import React from 'react';
import styled from '@emotion/styled';

import { NavLink } from './NavLink';

const Wrapper = styled.div`
  position: relative;
  display: inline-block;

  .content {
    /* display: none; */
    position: absolute;
    background-color: #f1f1f1;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
  }

  a {
    display: block;
  }
`;

export const Dropdown = props => (
  <Wrapper>
    <div className="content">
      <NavLink to="/RSVP">RSVP</NavLink>
      <NavLink to="/events">Events</NavLink>
      <NavLink to="/travel">Travel</NavLink>
      <NavLink to="/thingsToDo">Things to Do</NavLink>
      <NavLink to="registry">Registry</NavLink>
    </div>
  </Wrapper>
);
