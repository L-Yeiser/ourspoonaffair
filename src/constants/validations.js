import validate from 'validate.js';
import { stringToNumber } from 'utils/stringToNumber';

validate.validators.guestCount = (
  guestCount,
  definition,
  prop,
  target = {}
) => {
  const count = stringToNumber(guestCount);

  if (count) {
    const guestKeys = Object.keys(target).filter(key => key.includes('guest-'));
    if (guestKeys.length !== count) {
      return 'Please provide a name for eaach guest';
    }
  }

  return '';
};

export const RSVPValidations = {
  email: {
    email: {
      message: 'Email is not a valid email',
    },
    presence: {
      allowEmpty: false,
      message: 'Email is required',
    },
  },
  name: {
    presence: {
      allowEmpty: false,
      message: 'Name is required',
    },
  },
  attending: {
    presence: {
      allowEmpty: false,
      message: 'Attending is required',
    },
  },
  guestCount: {
    guestCount: {
      fullMessage: false,
    },
  },
};
