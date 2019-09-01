import React from 'react';

import { RadioInput } from './style';

export const RadioGroup = React.memo(
  ({ id, inputs, onChange, currentValue }) => {
    return inputs.map(({ id: inputId, label, value }) => (
      <React.Fragment key={inputId}>
        <RadioInput
          defaultChecked={currentValue === value}
          id={inputId}
          name={id}
          type="radio"
        />
        <label
          onClick={() => {
            onChange({ [id]: value });
          }}
          htmlFor={inputId}
        >
          {label}
        </label>
      </React.Fragment>
    ));
  }
);
