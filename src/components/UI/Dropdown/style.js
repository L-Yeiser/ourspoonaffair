import styled from '@emotion/styled';

import { standards, colors } from 'themes';

export const Container = styled.div`
  background-color: ${colors.grayDarkest};
  border-radius: ${standards.borderRadius};
  box-shadow: 0px 8px 16px 0px ${colors.grayLightest};
  display: flex;
  min-width: 175px;
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  padding: ${standards.padding};
  position: absolute;
  right: 0px;
  top: 30px;
  transition: visibility 0s, opacity 0.3s ease-in-out;

  .content {
    flex: 1;
  }

  .link {
    display: flex;
    justify-content: flex-end;
    flex: 1;
  }

  a {
    color: ${colors.white};

    &.active {
      color: ${colors.grayLight};
    }
  }
`;
