import React, { useState, useCallback, useReducer } from 'react';
import validate from 'validate.js';
import { isEmpty } from 'lodash';

import firebase from 'firebase';

import { useMergeState } from 'Hooks';
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
  const [form, mergeState] = useMergeState({ rsvp: {}, validations: {} });
  const [submitting, setSubmitting] = useState(false);

  const validateRSVP = rsvp => {
    return validate(rsvp, RSVPValidations, {
      fullMessages: false,
    });
  };

  const updateRsvp = useCallback(update => {
    mergeState(prevForm => {
      const rsvp = {
        ...prevForm.rsvp,
        ...update,
      };
      const validations = validateRSVP(rsvp);

      return {
        rsvp,
        ...(isEmpty(prevForm.validations)
          ? {}
          : {
              validations,
            }),
      };
    });
  }, []);

  const submitRsvp = useCallback(async () => {
    setSubmitting(true);
    const { rsvp } = form;

    const validations = validateRSVP(rsvp);

    if (!validations) {
      await firebase.rsvps.doc(rsvp.email).set(rsvp);
      mergeState({ rsvp: {}, validations: {} });
    } else {
      mergeState({ validations });
    }

    setSubmitting(false);
  }, [form]);

  return (
    <Container>
      <FormContainer>
        <header>
          <h2>RSVP</h2>
        </header>
        <Form onChange={updateRsvp} formContent={form.rsvp}>
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
            {form.rsvp.attending ? (
              <>
                <Form.FormInput
                  type="text"
                  id="guestCount"
                  label="Guest Count"
                  size="2"
                  maxLength="1"
                  pattern="\d*"
                />
                <GuestCount count={form.rsvp.guestCount} />
              </>
            ) : null}
          </Form.ContentContainer>
          <Form.FormErrors validations={form.validations} />
          <Form.FormSubmit onSubmit={submitRsvp} submitting={submitting}>
            Get Excited
          </Form.FormSubmit>
        </Form>
      </FormContainer>
    </Container>
  );
};
