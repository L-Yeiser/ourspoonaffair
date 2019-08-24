import React, { memo } from 'react';

import { Container } from './style';

export const Dropdown = memo(({ children, isOpen }) => {
  return (
    <Container isOpen={isOpen}>
      <div className="content">{children}</div>
    </Container>
  );
});
