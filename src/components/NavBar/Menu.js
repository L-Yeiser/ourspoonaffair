import React, { useRef, useEffect } from 'react';

import { MenuButton, Dropdown } from 'UI';

export const Menu = ({ isOpen, open, children }) => {
  const dropdown = useRef();

  const handleClick = e => {
    if (dropdown.current.contains(e.target)) {
      return;
    }

    open(false);
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClick);

    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, []);

  return (
    <div className="menu" ref={dropdown}>
      <MenuButton isOpen={isOpen} open={open} />
      <Dropdown isOpen={isOpen}>{children}</Dropdown>
    </div>
  );
};
