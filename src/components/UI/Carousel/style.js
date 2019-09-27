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
  overflow: hidden;
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

export const ChevronContainer = styled.div`
  background-color: ${colors.blackBeta};
  position: absolute;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2rem;
  height: 2rem;
  &.right {
    right: 0.5rem;
    top: 50%;
  }

  &.left {
    left: 0.5rem;
    top: 50%;
  }
`;

export const Chevron = styled.button`
  border: solid ${colors.white};
  border-width: 0 0.25rem 0.25rem 0;
  display: inline-block;
  padding: 0.25rem;
  background: none;
  outline: none;

  &.right {
    transform: rotate(-45deg);
    -webkit-transform: rotate(-45deg);
    margin-right: 0.25rem;
  }

  &.left {
    transform: rotate(135deg);
    -webkit-transform: rotate(135deg);
    margin-left: 0.25rem;
  }
`;
