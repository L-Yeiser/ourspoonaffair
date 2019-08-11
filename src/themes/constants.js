const breakpoints = {
  small: 600,
  large: 1500,
};

const mediaQuery = type => {
  const target = breakpoints[type];

  return `@media (max-width: ${target}px)`;
};

export const constants = {
  mediaQuery,
};
