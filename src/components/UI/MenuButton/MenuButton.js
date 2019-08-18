import React, { memo } from 'react';

import { Button } from './style';

export const MenuButton = memo(props => (
  <Button onClick={props.open}>
    <div className={props.isOpen ? 'open' : null}>
      <span />
      <span />
      <span />
      <span />
      <span />
      <span />
    </div>
  </Button>
));
