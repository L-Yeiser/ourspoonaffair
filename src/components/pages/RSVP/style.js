/** @jsx jsx */
import styled from '@emotion/styled';

import { colors, standards, constants } from 'themes';

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const FormContainer = styled.div`
  background: ${colors.blackAlpha};
  color: ${colors.white};
  border-radius: ${standards.borderRadius};
  overflow-y: scroll;
  padding: ${standards.padding} ${standards.paddingMedium};
  max-height: 50vh;

  button[type='submit'] {
    margin-top: ${standards.margin};
  }

  header {
    display: flex;
    justify-content: center;
    ${[constants.mediaQuery('small')]} {
      justify-content: flex-start;
    }
    margin-bottom: ${standards.margin};
  }
`;
