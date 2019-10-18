/** @jsx jsx */
import styled from '@emotion/styled';

import { standards, colors, constants } from 'themes';

import backgroundSmall from 'assets/background-small.jpg';
import backgroundMedium from 'assets/background-medium.jpg';
import backgroundLarge from 'assets/background-standard.jpg';

export const AppContainer = styled.div`
  color: ${colors.black};
  font-family: 'Montserrat', sans-serif;
  background: url(${backgroundLarge}) 50% 50% / cover no-repeat;
  ${[constants.mediaQuery('small')]} {
    background: url(${backgroundSmall}) 50% 50% / cover no-repeat;
  }
    ${[constants.mediaQuery('large')]} {
    background: url(${backgroundMedium}) 50% 50% / cover no-repeat;
  }

  height: 100vh;
  width: '100%'
  font-size: ${standards.body};

  h2, h1, h3, h4, h5 {
    font-family: 'Amatic SC', cursive;
    margin-block-start: 0;
    margin-block-end: 0;
  }

  h1 {
    font-size: ${standards.h1};
  }

  h2 {
    font-size: ${standards.h2}
  }

  h3 {
    font-size: ${standards.h3};
  }
  
  p {
    font-size: ${standards.body};
    margin: 0.5rem 0;
    ${[constants.mediaQuery('small')]} {
      margin: 0.25rem 0;
    }
  }

  a {
    color: ${colors.black};
  }

  input {
    @keyframes autofill {
      100% {
          background: transparent;
          color: inherit;
      }
    }

    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active {
        -webkit-animation: autofill 0s forwards;
        animation: autofill 0s forwards;
    }
    
    &[type=number]::-webkit-inner-spin-button, 
    &[type=number]::-webkit-outer-spin-button { 
      -webkit-appearance: none; 
      margin: 0; 
    }
  }
`;
