import React from 'react';

import { Input as StyledInput } from './style';

export const Input = React.memo(
  ({ id, type, size, maxLength, pattern, onChange, value }) => {
    return (
      <StyledInput
        onChange={({ target }) => onChange({ [id]: target.value })}
        value={value}
        name={id}
        type={type}
        size={size}
        maxLength={maxLength}
        pattern={pattern}
      />
    );
  }
);
