/** @jsx jsx */
import { jsx } from '@emotion/core';

import { standards } from 'themes';

export const ContentContainer = ({ children }) => (
  <div
    css={{
      display: 'flex',
      justifyContent: 'center',
      position: 'relative',
    }}
  >
    <div
      css={{
        overflow: 'scroll',
        height: 'calc(72vh - 5.5rem)',
        maxWidth: '625px',
        padding: `0 ${standards.padding}`,
        'p + h2, ul + h2': {
          marginTop: standards.marginLarge,
        },
        'p + h3': {
          marginTop: standards.marginMedium,
        },
      }}
    >
      {children}
      <div
        css={{
          position: 'absolute',
          left: '50%',
          transform: 'translateX(-50%)',
          bottom: 0,
          width: '625px',
          '@media (max-width: 625px)': {
            width: '100%',
          },
          height: '1rem',
          // // TOP 200
          background: `linear-gradient(
              to bottom,
              rgba(0,0,0,0) 0%,
              rgba(252,252,252,1) 100%
           )`,
        }}
      />
    </div>
  </div>
);
