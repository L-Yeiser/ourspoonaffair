export const stringToNumber = number =>
  number && /\d/.test(number) ? +number : false;
