import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from '@reach/router';
import styled from '@emotion/styled';
import { ThemeProvider } from 'emotion-theming';

import { globalStyles } from 'themes/index';

import { NavBar } from 'components/NavBar/index';
import { Events, Home, Registry, RSVP, ThingsToDo, Travel } from 'pages/index';

const AppWrapper = styled.div`
  background: ${props => props.theme.body};
  color: ${props => props.theme.fontBlack};
  min-height: 500px;
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
