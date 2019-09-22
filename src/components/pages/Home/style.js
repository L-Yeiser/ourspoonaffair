/** @jsx jsx */
import styled from '@emotion/styled';

import { constants, standards } from 'themes';

export const Container = styled.div`
  margin-top: ${standards.marginLarge};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;

  h1,
  p {
    text-align: center;

    span.hideLarge {
      display: none;
    }

    ${[constants.mediaQuery('small')]} {
      span {
        display: block;
      }
      span.hideSmall {
        display: none;
      }

      span.hideLarge {
        display: inherit;
      }
    }
  }
`;
