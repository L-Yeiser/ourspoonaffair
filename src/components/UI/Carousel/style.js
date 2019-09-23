/** @jsx jsx */
import styled from '@emotion/styled';

import { constants, colors } from 'themes';

export const CarouselContainer = styled.div`
  width: calc(625px);
  height: calc(625px / 1.5);
  ${[constants.mediaQuery('small')]} {
    width: calc(100vw - 2rem);
    height: calc((100vw - 2rem) / 1.5);
  }

  position: relative;
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  position: absolute;
  transition-property: transform;
  transition-duration: 0.2s;
  left: 0;

  &.left {
    transform: translateX(-100%);
  }
  &.active {
    transform: translateX(0%);
  }
  &.right {
    transform: translateX(100%);
  }

  &.hidden {
    display: none;
  }
`;

export const Chevron = styled.button`
  border: solid ${colors.white};
  border-width: 0 0.5rem 0.5rem 0;
  display: inline-block;
  padding: 0.5rem;
  background: none;
  position: absolute;
  outline: none;

  &.right {
    transform: rotate(-45deg);
    -webkit-transform: rotate(-45deg);
    right: 1rem;
    top: 50%;
  }

  &.left {
    transform: rotate(135deg);
    -webkit-transform: rotate(135deg);
    left: 1rem;
    top: 50%;
  }
`;
