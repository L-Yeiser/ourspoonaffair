/** @jsx jsx */
import styled from '@emotion/styled';

import { colors, standards, constants } from 'themes';

const breakpoints = [576, 768, 992, 1200];

const mq = breakpoints.map(bp => `@media (min-width: ${bp}px)`);

console.log(mq[0]);

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

    ${[constants.mediaQuery('small')]} {
      a:not(.active) {
        display: none;
      }
    }
  }

  .menu {
    display: none;
    position: relative;
  }

  ${[constants.mediaQuery('small')]} {
    .menu {
      display: flex;
    }
  }
`;
