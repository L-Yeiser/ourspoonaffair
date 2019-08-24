/** @jsx jsx */
import styled from '@emotion/styled';

import { colors, standards } from 'themes';

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const FormContainer = styled.div`
  background: ${colors.blackAlpha};
  color: ${colors.white};
  border-radius: ${standards.borderRadius};
  overflow: scroll;
  padding: ${standards.padding} ${standards.paddingMedium};
  max-height: 50vh;

  header {
    line-height: 1px;
    display: flex;
    justify-content: center;
  }
`;
