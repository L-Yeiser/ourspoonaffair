import React from 'react';

import { Button } from './style';

export const MenuButton = props => (
  <Button onClick={() => props.open(!props.isOpen)}>
    <div className={props.isOpen ? 'open' : null}>
      <span />
      <span />
      <span />
      <span />
      <span />
      <span />
    </div>
  </Button>
);
