import React, { useMemo, useContext } from 'react';
import { isEmpty } from 'lodash';

import { Input } from '../Input/Input';
import { RadioGroup } from '../RadioGroup/RadioGroup';

import {
  ContentContainer,
  SectionContent,
  SectionLabel,
  FormBreak,
  Container,
  Submit,
  Errors,
  LoadingSpinner,
} from './style';

const FormContext = React.createContext();

const FormErrors = React.memo(({ validations }) => {
  if (isEmpty(validations)) {
    return null;
  }

  const errorMessages = Object.values(validations);
  return (
    <Errors>
      <ul>
        {errorMessages.map(([message]) => (
          <li key={message}>{message}</li>
        ))}
      </ul>
    </Errors>
  );
});

const FormSubmit = React.memo(({ onSubmit, children, submitting }) => (
  <Submit
    type="submit"
    onClick={e => {
      e.preventDefault();
      onSubmit();
    }}
  >
    {submitting ? <LoadingSpinner /> : children}
  </Submit>
));

const FormInput = React.memo(
  ({ id, label, type, size = '30', maxLength, pattern }) => {
    const { formContent = {}, onChange } = useContext(FormContext);
    return (
      <>
        <SectionLabel htmlFor={id} label={label} />
        <SectionContent>
          <Input
            onChange={onChange}
            value={formContent[id] || ''}
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

const FormRadioGroup = React.memo(({ id, inputs }) => {
  const { formContent = {}, onChange } = useContext(FormContext);
  console.log('WTF', formContent, formContent[id], id);
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
Form.FormErrors = FormErrors;
