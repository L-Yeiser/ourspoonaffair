import React, { useRef, useEffect } from 'react';

import { MenuButton, Dropdown } from 'UI';

export const Menu = ({ isOpen, open, children }) => {
  const menu = useRef();

  const handleClick = e => {
    if (menu.current.contains(e.target)) {
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
    <div className="menu" ref={menu}>
      <MenuButton isOpen={isOpen} open={open} />
      <Dropdown isOpen={isOpen}>{children}</Dropdown>
    </div>
  );
};
