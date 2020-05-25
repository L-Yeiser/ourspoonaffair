import React from 'react';
import { ContentContainer } from 'UI';

import { Container } from './style';

export const Home = () => {
  return (
    <ContentContainer>
      <Container>
        <h1>
          <span>
            Kate Willson <span className="hideLarge">And</span>
            <span className="hideSmall"> +</span>
          </span>{' '}
          <span>Lauren Yeiser</span>
        </h1>
        <p>
          <span>Saturday, Jully 11th, 2020</span>{' '}
          <span className="hideSmall">| </span>
          <span>Our Backyard, Portland, Ore. </span>
        </p>
      </Container>
    </ContentContainer>
  );
};
