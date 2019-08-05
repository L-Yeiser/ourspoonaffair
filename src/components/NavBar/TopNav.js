import styled from '@emotion/styled';

import { colors } from 'themes/index';

export const TopNav = styled.div`
  padding: ${props => props.theme.padding};
  background-color: ${colors.blueSlate};
  overflow: hidden;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .links {
    display: flex;
    flex-direction: row;
  }

  a {
    display: block;
    color: ${colors.white};
    padding: ${props => props.theme.padding};
    text-decoration: none;
    font-size: ${props => props.theme.h1};
  }

  a:hover {
    background-color: ${colors.blueLight}
    color: ${props => props.theme.fontGray};
  }

  a.active {
    background-color: ${colors.blueDark};
    color: ${props => props.theme.fontWhite};
  }

  .menu {
    display: none;
  }

  @media (max-width: 1000px) {
    a:not(.active) {
      display: none;
    }
    .menu {
      display: block;
    }
  }
`;
