import React, { useState, useCallback } from 'react';
import validate from 'validate.js';

import firebase from 'firebase';

import { Form } from 'UI';
import { RSVPValidations } from 'constants/validations';
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
  const [validations, setValidations] = useState();
  const [submitting, setSubmitting] = useState(false);

  const validateRSVP = (updatedRSVP = rsvp) => {
    const invalidInputs = validate(updatedRSVP, RSVPValidations, {
      fullMessages: false,
    });

    setValidations(invalidInputs);

    return invalidInputs;
  };

  const updateRsvp = useCallback(
    update => {
      setRsvp(prev => {
        const updatedRSVP = {
          ...prev,
          ...update,
        };

        if (validations) {
          validateRSVP(updatedRSVP);
        }

        console.log(updatedRSVP, validations);

        return updateRsvp;
      });
    },
    [rsvp, validations]
  );

  const submitRsvp = useCallback(async () => {
    setSubmitting(true);
    const { email } = rsvp;
    const invalidInputs = validateRSVP();

    if (!invalidInputs) {
      await firebase.rsvps.doc(email).set(rsvp);
      setRsvp({});
    }

    setSubmitting(false);
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
          <Form.FormErrors validations={validations} />
          <Form.FormSubmit onSubmit={submitRsvp} submitting={submitting}>
            Get Excited
          </Form.FormSubmit>
        </Form>
      </FormContainer>
    </Container>
  );
};
