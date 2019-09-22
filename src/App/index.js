/** @jsx jsx */
import { jsx } from '@emotion/core';
import 'core-js/stable';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from '@reach/router';

import { ImagesProvider } from 'contexts/images';

import { NavBar } from 'components/NavBar';
import {
  Home,
  AboutUs,
  Wedding,
  Lodging,
  Activities,
  RSVP,
  Registry,
} from 'pages';
import { AppContainer } from './style';

const App = () => {
  return (
    <React.StrictMode>
      <AppContainer>
        <NavBar />
        <ImagesProvider>
          <Router>
            <Home default path="/" />
            <AboutUs path="/aboutus" />
            <Wedding path="/wedding" />
            <Lodging path="lodging" />
            <Activities path="activities" />
            <RSVP path="/RSVP" />
            <Registry path="registry" />
          </Router>
        </ImagesProvider>
      </AppContainer>
    </React.StrictMode>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
