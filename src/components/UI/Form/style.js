/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';

import { colors, standards, constants } from 'themes';

export const SectionLabel = ({ htmlFor, label }) => (
  <div
    css={{
      gridColumn: '1 / 2',
      [constants.mediaQuery('small')]: {
        gridColumn: '1 / 2',
      },
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
  gridColumn: '2 / 3',
  [constants.mediaQuery('small')]: {
    gridColumn: '1 / 2',
  },
});

export const FormBreak = styled.div``;

export const ContentContainer = styled.div`
  display: grid;
  /* grid-template-columns: auto auto; */
  grid-auto-rows: 1fr;
  grid-column-gap: ${standards.marginMedium};
  grid-row-gap: ${standards.padding};
  ${[constants.mediaQuery('small')]} {
    grid-row-gap: 0;
    grid-auto-rows: auto auto;
    grid-gap: 
    grid-template-columns: auto;
  }

  input[type='text'],
  input[type='email'] {
    ${[constants.mediaQuery('small')]} {
      margin-bottom: ${standards.margin};
      margin-top: ${standards.marginSmall};
    }
  }

  input[type='radio'] + label {
    ${[constants.mediaQuery('small')]} {
      margin-top: 10px;
      margin-bottom: 25px;
    }
  }
`;

export const Container = styled.form`
  display: grid;
`;

export const Submit = styled.button`
  grid-column: 1 / 3;
  padding: ${standards.padding};
  border-radius: ${standards.borderRadius};
  font-size: inherit;
  outline: 0;
  background: ${colors.white};
  display: flex;
  justify-content: center;
`;

export const Errors = styled.div`
  border: 1px solid ${colors.error};
  border-radius: ${standards.borderRadius};
  padding: 0 ${standards.padding};
  grid-column: 1 / 3;
  margin: ${standards.marginMedium} 0 ${standards.margin} 0;

  li {
    color: ${colors.error};
  }
`;

export const LoadingSpinner = styled.div`
  border: 0.1em solid ${colors.grayLight}; /* Light grey */
  border-top: 0.1em solid ${colors.grayDarkest}; /* Blue */
  border-radius: 50%;
  width: 1em;
  height: 1em;
  animation: spin 2s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
