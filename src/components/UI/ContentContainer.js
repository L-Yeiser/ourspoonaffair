/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';

import { standards, constants } from 'themes';

const OuterContainer = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
`;

const InnerContainer = styled.div`
    overflow-y: scroll;
    overflow-x: hidden;
    padding: 0 ${standards.padding};
    height: calc(72vh - 5.5rem);
    max-width: 625px;
    padding: 0 ${standards.padding};
    p + h2, ul + h2: {
      margin-top: ${standards.marginLarge},
      ${[constants.mediaQuery('small')]}: {
        margin-top: ${standards.marginMedium};
      },
    },
    p + h3: {
      margin-top: ${standards.marginMedium},
      ${[constants.mediaQuery('small')]}: {
        margin-top: ${standards.margin},
      },
    },
`;

const Fade = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 0;
  width: 625px;
  ${[constants.mediaQuery('small')]} {
    width: 100%;
  }
  margin-bottom: -1px;
  height: 1rem;
  background: -webkit-linear-gradient(
    rgba(252, 252, 252, 0) 0%,
    rgba(252, 252, 252, 1) 100%
  );
  background: -ms-linear-gradient(transparent, rgba(252, 252, 252));
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0) 0% rgba(252, 252, 252, 1) 100%
  );
`;

export const ContentContainer = ({ children }) => (
  <OuterContainer>
    <InnerContainer>
      {children}
      <Fade />
    </InnerContainer>
  </OuterContainer>
);
