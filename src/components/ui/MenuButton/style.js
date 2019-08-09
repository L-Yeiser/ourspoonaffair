import styled from '@emotion/styled';

export const Button = styled.div`
  width: 30px;
  height: 25px;
  position: relative;
  border: none;

  span {
    position: absolute;
    height: 20%;
    width: 50%;
    background: #55616d;
    opacity: 1;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: 0.25s ease-in-out;
    -moz-transition: 0.25s ease-in-out;
    -o-transition: 0.25s ease-in-out;
    transition: 0.25s ease-in-out;
  }

  span:nth-child(even) {
    left: 50%;
    border-radius: 0 6px 6px 0;
  }

  span:nth-child(odd) {
    left: 0px;
    border-radius: 6px 0 0 6px;
  }

  span:nth-child(1),
  span:nth-child(2) {
    top: 0px;
  }

  span:nth-child(3),
  span:nth-child(4) {
    top: 40%;
  }

  span:nth-child(5),
  span:nth-child(6) {
    top: 80%;
  }

  .open span:nth-child(1),
  .open span:nth-child(6) {
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    transform: rotate(45deg);
  }

  .open span:nth-child(2),
  .open span:nth-child(5) {
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
    transform: rotate(-45deg);
  }

  .open span:nth-child(1) {
    left: calc(10%);
    top: calc(15%);
  }

  .open span:nth-child(2) {
    left: calc(40%);
    top: calc(15%);
  }

  .open span:nth-child(3) {
    left: -50%;
    opacity: 0;
  }

  .open span:nth-child(4) {
    left: 100%;
    opacity: 0;
  }

  .open span:nth-child(5) {
    left: calc(10%);
    top: calc(58%);
  }

  .open span:nth-child(6) {
    left: calc(40%);
    top: calc(58%);
  }
`;
