/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';

import { colors, standards } from 'themes';

export const SectionLabel = ({ htmlFor, label }) => (
  <div
    css={{
      gridColumnStart: 1,
      gridColumnEnd: 2,
      display: 'inline-grid',
      justifyContent: 'start',
      alignContent: 'end',
      paddingBottom: standards.paddingExtraSmal,
    }}
  >
    <label htmlFor={htmlFor}>{label}</label>
  </div>
);

export const SectionContent = styled.div({
  gridColumnStart: 2,
  gridColumnEnd: 3,
});

export const FormBreak = styled.div``;

export const ContentContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-auto-rows: 1fr;
  grid-column-gap: ${standards.marginMedium};
  grid-row-gap: ${standards.padding};
`;

export const Container = styled.form`
  display: grid;
`;

export const Submit = styled.button`
  grid-column-start: 1;
  grid-column-end: 3;
  padding: ${standards.padding};
  border-radius: ${standards.borderRadius};
  font-size: inherit;
  outline: 0;
  background: ${colors.white};
`;
