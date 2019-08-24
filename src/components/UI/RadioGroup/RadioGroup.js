import React from 'react';

import { RadioInput } from './style';

export const RadioGroup = React.memo(({ id, inputs, onChange, value }) => {
  return inputs.map(({ id: inputId, label }) => (
    <>
      <RadioInput
        checked={value === inputId}
        type="radio"
        id={inputId}
        name={id}
      />
      <label
        onClick={() => {
          onChange({ [id]: inputId });
        }}
        htmlFor={inputId}
      >
        {label}
      </label>
    </>
  ));
});
