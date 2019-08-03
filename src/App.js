import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Link } from '@reach/router';
import styled, { ThemeProvider } from 'styled-components';

import globalStyles from 'themes/globalStyles';

import { Events, Home, Registry, RSVP, ThingsToDo, Travel } from 'pages/index';

const AppWrapper = styled.div`
  padding: ${props => props.theme.padding};
  background: ${props => props.theme.body};
  color: ${props => props.theme.text};
  min-height: 500px;
`;

const App = () => {
  return (
    <React.StrictMode>
      <ThemeProvider theme={globalStyles}>
        <AppWrapper>
          <header>Header</header>
          <Router>
            <Home path="/" />
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
