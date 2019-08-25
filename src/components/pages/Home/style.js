/** @jsx jsx */
import styled from '@emotion/styled';

import { standards, constants } from 'themes';

export const Container = styled.div`
  margin-top: ${standards.marginLarge};
  padding: ${standards.padding};
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
