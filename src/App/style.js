/** @jsx jsx */
import styled from '@emotion/styled';

import { standards, colors } from 'themes';

import image from 'assets/background.jpg';

export const AppContainer = styled.div`
  color: ${colors.black};
  font-family: 'Montserrat', sans-serif;
  background: url(${image}) no-repeat center center fixed;
  background-position: '50%' '50%';
  height: 100vh;
  width: '100%'
  background-repeat: no-repeat;
  background-size: cover;
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
