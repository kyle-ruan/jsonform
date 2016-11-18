const onFormSubmit = (values, options) => {
  const customErrors = [
    { 'Client.LastName': ['Please enter a lastname'] },
    { 'Client.DateOfBirth': ['Please enter a date of birth'] }
  ];

  return new Promise((resolve, reject) => {
    if (customErrors.length > 0) {
      reject(customErrors);
    }
    resolve();
  });
};

export { onFormSubmit };
