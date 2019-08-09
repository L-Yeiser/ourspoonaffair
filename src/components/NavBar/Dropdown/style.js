import styled from '@emotion/styled';

import { standards, colors } from 'themes';

export const Container = styled.div`
  position: absolute;
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  transition: visibility 0s, opacity 0.3s ease-in-out;
  right: 0px;
  top: 35px;
  background-color: ${colors.grayDarkest};
  z-index: ${standards.aboveNav};
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  padding: ${standards.padding} 0;

  .content {
    display: flex;
    justify-content: flex-end;
  }

  a {
    white-space: nowrap;
    display: block;
    margin: 0 ${standards.marginLarge};

    &.active {
      color: ${colors.blueSlate};
    }
  }
`;
