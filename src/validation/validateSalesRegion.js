export const required = value => (value ? undefined : 'Required');

const maxLength = max => value =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined;

export const maxLength50 = maxLength(50);

export const validateItemLengths = items =>
  'Choices cannot be longer than 40 characters';
