import React from 'react';
import { Link } from '@reach/router';

const isActive = ({ isCurrent }) => {
  return isCurrent ? { className: 'active' } : null;
};

export const NavLink = props => <Link getProps={isActive} {...props} />;
