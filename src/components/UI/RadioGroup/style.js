/** @jsx jsx */
import styled from '@emotion/styled';

import { standards, colors } from 'themes';

export const RadioInput = styled.input`
  display: none;
  &[type='radio'] + label:not(:last-child) {
    margin-right: ${standards.marginMedium};
  }

  &[type='radio'] + label,
  &[type='radio'] + label {
    position: relative;
    padding-left: 28px;
    cursor: pointer;
    display: inline-block;
    color: ${colors.black};
  }
  &[type='radio'] + label:before,
  &[type='radio'] + label:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 18px;
    height: 18px;
    border: 1px solid ${colors.grayDarkest};
    border-radius: 100%;
    background: ${colors.white};
  }
  &[type='radio'] + label:after,
  &[type='radio'] + label:after {
    content: '';
    width: 12px;
    height: 12px;
    background: ${colors.grayDarkest};
    position: absolute;
    top: 4px;
    left: 4px;
    border-radius: 100%;
    -webkit-transition: all 0.2s ease;
    transition: all 0.2s ease;
  }
  &[type='radio']:not(:checked) + label:after {
    opacity: 0;
    -webkit-transform: scale(0);
    transform: scale(0);
  }
  &[type='radio']:checked + label:after {
    opacity: 1;
    -webkit-transform: scale(1);
    transform: scale(1);
  }

  &[type='radio'] {
    display: none;
    background: red;
  }
`;
