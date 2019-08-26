import React, { useState, useCallback } from 'react';

import firebase from 'firebase';

import { Form } from 'UI';
import { Container, FormContainer } from './style';

const GuestCount = ({ count }) =>
  count && /\d/.test(count) ? (
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

export const RSVP = () => {
  const [rsvp, setRsvp] = useState({});

  const updateRsvp = useCallback(update => {
    setRsvp(prev => ({
      ...prev,
      ...update,
    }));
  }, []);

  const submitRsvp = useCallback(() => {
    const { email } = rsvp;
    firebase.rsvps.doc(email).set(rsvp);
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
                },
                {
                  id: 'no',
                  label: 'No',
                },
              ]}
            />
            {rsvp.attending === 'yes' ? (
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
