import styled from '@emotion/styled';

import { colors, standards } from 'themes/index';

export const Nav = styled.nav`
  padding: ${props => props.theme.padding};
  background-color: ${colors.blueSlate};
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    color: ${colors.grayLight};
    padding: ${standards.padding};
    text-decoration: none;
    font-size: ${standards.h4};
  }

  .links {
    display: flex;
    flex-direction: row;

    a.active {
      color: ${colors.grayDarkest};
    }

    @media (max-width: 1000px) {
      a:not(.active) {
        display: none;
      }
    }
  }

  .menu {
    display: none;
    position: relative;
  }

  @media (max-width: 1000px) {
    .menu {
      display: flex;
    }
  }
`;
