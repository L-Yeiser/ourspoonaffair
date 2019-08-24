/** @jsx jsx */
import { jsx } from '@emotion/core';

import { standards } from 'themes';

export const ContentContainer = ({ children }) => (
  <div
    css={{
      display: 'flex',
      justifyContent: 'center',
      padding: standards.padding,
      flex: 1,
    }}
  >
    <div
      css={{
        maxWidth: '75vw',
      }}
    >
      {children}
    </div>
  </div>
);
