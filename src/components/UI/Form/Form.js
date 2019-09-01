import React, { useMemo, useContext } from 'react';

import { Input } from '../Input/Input';
import { RadioGroup } from '../RadioGroup/RadioGroup';

import {
  ContentContainer,
  SectionContent,
  SectionLabel,
  FormBreak,
  Container,
  Submit,
} from './style';

const FormContext = React.createContext();

const FormSubmit = React.memo(({ onSubmit, children }) => (
  <Submit
    type="submit"
    onClick={e => {
      e.preventDefault();
      onSubmit();
    }}
  >
    {children}
  </Submit>
));

const FormInput = React.memo(
  ({ id, label, type, size, maxLength, pattern }) => {
    const { formContent = {}, onChange } = useContext(FormContext);
    return (
      <>
        <SectionLabel htmlFor={id} label={label} />
        <SectionContent>
          <Input
            onChange={onChange}
            value={formContent.id}
            id={id}
            type={type}
            size={size}
            maxLength={maxLength}
            pattern={pattern}
          />
        </SectionContent>
      </>
    );
  }
);

const FormRadioGroup = React.memo(({ id, inputs, value }) => {
  const { formContent = {}, onChange } = useContext(FormContext);
  return (
    <SectionContent>
      <RadioGroup
        id={id}
        inputs={inputs}
        currentValue={formContent[id]}
        onChange={onChange}
      />
    </SectionContent>
  );
});

export const Form = ({ children, onChange, formContent }) => {
  const value = useMemo(() => ({ onChange, formContent }), [
    onChange,
    formContent,
  ]);

  return (
    <Container>
      <FormContext.Provider value={value}>{children}</FormContext.Provider>
    </Container>
  );
};

Form.ContentContainer = ContentContainer;
Form.FormInput = FormInput;
Form.FormRadioGroup = FormRadioGroup;
Form.FormBreak = FormBreak;
Form.SectionLabel = SectionLabel;
Form.FormSubmit = FormSubmit;
