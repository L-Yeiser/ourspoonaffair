import React, { useState, useCallback } from 'react';
import validate from 'validate.js';

import firebase from 'firebase';

import { Form } from 'UI';
import { validateRSVP } from 'constants/validations';
import { stringToNumber } from 'utils/stringToNumber';

import { Container, FormContainer } from './style';

const GuestCount = ({ count }) => {
  const numericCount = stringToNumber(count);
  return numericCount ? (
    <>
      {Array(+count)
        .fill(true)
        .map((_, index) => (
          <Form.FormInput
            key={index}
            type="text"
            id={`guest-${index + 1}`}
            label={`${index + 1}. Name`}
          />
        ))}
    </>
  ) : null;
};

export const RSVP = () => {
  const [rsvp, setRsvp] = useState({});
  const [errorMessages, setErrorMessages] = useState();

  const updateRsvp = useCallback(update => {
    setRsvp(prev => ({
      ...prev,
      ...update,
    }));
  }, []);

  const submitRsvp = useCallback(() => {
    const { email } = rsvp;
    const validations = validate(rsvp, validateRSVP, { fullMessages: false });

    if (validations) {
      setErrorMessages(Object.values(validations));
    } else {
      firebase.rsvps.doc(email).set(rsvp);
    }
  });

  return (
    <Container>
      <FormContainer>
        <header>
          <h2>RSVP</h2>
        </header>
        <Form onChange={updateRsvp} formContent={rsvp}>
          <Form.ContentContainer>
            <Form.FormInput id="name" label="Full Name" type="text" />
            <Form.FormInput id="email" label="Email" type="email" />
            <Form.SectionLabel label="Attending" />
            <Form.FormRadioGroup
              id="attending"
              inputs={[
                {
                  id: 'yes',
                  label: 'Yes',
                  value: true,
                },
                {
                  id: 'no',
                  label: 'No',
                  value: false,
                },
              ]}
            />
            {rsvp.attending ? (
              <>
                <Form.FormInput
                  type="text"
                  id="guestCount"
                  label="Guest Count"
                  size="2"
                  maxLength="1"
                  pattern="\d*"
                />
                <GuestCount count={rsvp.guestCount} />
              </>
            ) : null}
          </Form.ContentContainer>
          <Form.FormSubmit onSubmit={submitRsvp}>Get Excited</Form.FormSubmit>
        </Form>
      </FormContainer>
    </Container>
  );
};
