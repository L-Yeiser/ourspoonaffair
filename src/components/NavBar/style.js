/** @jsx jsx */
import styled from '@emotion/styled';

import { colors, standards, constants } from 'themes';

export const Nav = styled.nav`
  padding: ${standards.paddingLarge} ${standards.padding};
  background-color: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    color: ${colors.black};
    padding: ${standards.padding};
    text-decoration: none;
    font-size: ${standards.h4};
  }

  .links {
    display: flex;
    flex-direction: row;

    a.active {
      color: ${colors.grayLight};
    }

    ${[constants.mediaQuery('large')]} {
      a:not(.active) {
        display: none;
      }
    }
  }

  .menu {
    display: none;
    position: relative;
  }

  ${[constants.mediaQuery('large')]} {
    .menu {
      display: flex;
    }
  }
`;
