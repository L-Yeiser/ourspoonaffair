import styled from '@emotion/styled';

import { standards, colors } from 'themes';

export const Container = styled.div`
  background-color: ${colors.grayDarkest};
  border-radius: ${standards.borderRadius};
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  min-width: 175px;
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  padding: ${standards.padding};
  position: absolute;
  right: 0px;
  top: 30px;
  transition: visibility 0s, opacity 0.3s ease-in-out;
  z-index: ${standards.overNav};

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
