/** @jsx jsx */
import { jsx } from '@emotion/core';

import { standards, constants } from 'themes';

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
        overflowY: 'scroll',
        overflowX: 'hidden',
        height: 'calc(72vh - 5.5rem)',
        maxWidth: '625px',
        margin: `0 ${standards.padding}`,
        'p + h2, ul + h2': {
          marginTop: standards.marginLarge,
          [constants.mediaQuery('small')]: {
            marginTop: standards.marginMedium,
          },
        },
        'p + h3': {
          marginTop: standards.marginMedium,
          [constants.mediaQuery('small')]: {
            marginTop: standards.margin,
          },
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
          [constants.mediaQuery('small')]: {
            width: '100%',
          },
          height: '1rem',
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
