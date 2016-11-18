const getFieldError = (field, errorMessages) => {
  const errors = errorMessages.map(message => {
    return { field, message };
  });

  return { [field]: { errors } };
};

export { getFieldError };
