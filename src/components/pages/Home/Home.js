import React from 'react';
import styled from '@emotion/styled';

import { Container } from './style';

export const Home = () => {
  return (
    <Container>
      <h1>
        <span>
          Kate Willson <span className="hideLarge">And</span>
          <span className="hideSmall"> +</span>
        </span>{' '}
        <span>Lauren Yeiser</span>
      </h1>
      <p>
        <span>Saturday, Sept 5, 2020</span>{' '}
        <span className="hideSmall">| </span>
        <span>Mt Hood, Oregon</span>
      </p>
    </Container>
  );
};
