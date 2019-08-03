import React from 'react';
import { Link } from '@reach/router';
import styled from '@emotion/styled';

const TopNav = styled.div`
  padding: ${props => props.theme.padding};
  background-color: #708090;
  overflow: hidden;

  a {
    float: left;
    display: block;
    color: ${props => props.theme.fontWhite};
    text-align: center;
    padding: ${props => props.theme.padding};
    text-decoration: none;
    font-size: ${props => props.theme.h1};
  }

  a:hover {
    background-color: #9ba6b1;
    color: ${props => props.theme.fontGray};
  }

  a.active {
    background-color: #55616d;
    color: ${props => props.theme.fontWhite};
  }

  .menu {
    display: none;
  }

  @media (max-width: 600px) {
    a:not(.active) {
      display: none;
    }
    .menu {
      display: block;
      float: right;
    }
  }
`;

const isActive = ({ isCurrent }) => {
  return isCurrent ? { className: 'active' } : null;
};

const NavLink = props => <Link getProps={isActive} {...props} />;

export const NavBar = () => (
  <TopNav>
    <NavLink to="/RSVP">RSVP</NavLink>
    <NavLink to="/events">Events</NavLink>
    <NavLink to="/travel">Travel</NavLink>
    <NavLink to="/thingsToDo">Things to Do</NavLink>
    <NavLink to="registry">Registry</NavLink>
    <button class="menu">click me</button>
    {/* <a href="javascript:void(0);" class="icon" onclick="myFunction()">
      <i class="fa fa-bars"></i>
    </a> */}
    {/* <span rol="img" aria-label="logo"></span> */}
  </TopNav>
);
