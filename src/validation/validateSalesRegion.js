export const required = value => (value ? undefined : 'Required');

const maxLength = max => value =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined;

export const maxLength50 = maxLength(50);

export const validateItemLengths = items =>
  items && items.some(item => item.length > 40)
    ? 'Choices cannot be longer than 40 characters'
    : undefined;

export const validateArrayLength = items =>
  items && items.length > 50
    ? 'List cannot include more than 50 items'
    : undefined;
