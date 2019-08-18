import React, { useState, useCallback } from 'react';

import { Form } from 'UI';
import { Container, FormContainer } from './style';

const GuestCount = ({ count }) =>
  count && /\d/.test(count) ? (
    <>
      {Array(+count)
        .fill(true)
        .map((_, index) => (
          <Form.FormInput
            type="text"
            id={`guest-${index}`}
            label={`${index + 1}. Guest Name`}
          />
        ))}
      <Form.FormBreak />
    </>
  ) : (
    <Form.FormBreak />
  );

export const RSVP = () => {
  const [rsvp, setRsvp] = useState({});

  const updateRsvp = useCallback(update => {
    setRsvp(prev => ({
      ...prev,
      ...update,
    }));
  }, []);

  return (
    <Container>
      <FormContainer>
        <header>
          <h2>RSVP</h2>
        </header>
        <Form onChange={updateRsvp} formContent={rsvp}>
          <Form.FormInput id="name" label="Full Name" type="text" />
          <Form.FormInput id="email" label="Email" type="email" />

          <Form.FormBreak />

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
          ) : (
            <Form.FormBreak />
          )}
          <Form.FormSubmit onSubmit={() => console.log('SUBMIT')}>
            Get Excited
          </Form.FormSubmit>
        </Form>
      </FormContainer>
    </Container>
  );
};
