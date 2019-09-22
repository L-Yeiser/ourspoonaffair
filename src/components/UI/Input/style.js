/** @jsx jsx */
import styled from '@emotion/styled';

import { standards, colors } from 'themes';

export const Input = styled.input({
  outline: 0,
  fontSize: standards.body,
  flex: 1,
  color: colors.black,
  border: 0,
  background: 'transparent',
  borderBottom: `1px solid ${colors.black}`,
  borderRadius: 0,
});
