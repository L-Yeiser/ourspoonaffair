import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from '@reach/router';
import styled from '@emotion/styled';
import { ThemeProvider } from 'emotion-theming';

import { globalStyles, standards } from 'themes';

import image from 'assets/background.jpg';

import { NavBar } from 'components/NavBar';
import { Events, Home, Registry, RSVP, ThingsToDo, Travel } from 'pages';

const AppWrapper = styled.div`
  color: ${props => props.theme.fontBlack};
  font-family: 'Roboto', sans-serif;
  background: url(${image}) no-repeat center center fixed;
  background-position: '50%' '50%';
  height: 100vh;
  width: '100%'
  background-repeat: no-repeat;
  background-size: cover;
  font-size: ${standards.body};

  h2 {
    font-size: ${standards.h2};
    font-family: 'Long Cang', cursive;
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


  /* input:-webkit-autofill {
    transition: background-color 5000s ease-in-out 0s;
    -webkit-text-fill-color: #fff !important;
  }

  input:-webkit-autofill:focus {
    transition: background-color 5000s ease-in-out 0s;
    -webkit-text-fill-color: #fff !important;
  }  */
`;

const App = () => {
  return (
    <React.StrictMode>
      <ThemeProvider theme={globalStyles}>
        <AppWrapper>
          <NavBar />
          <Router>
            <Home default path="/" />
            <Events path="/events" />
            <Travel path="/travel" />
            <ThingsToDo path="thingsToDo" />
            <RSVP path="/RSVP" />
            <Registry path="registry" />
          </Router>
        </AppWrapper>
      </ThemeProvider>
    </React.StrictMode>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
