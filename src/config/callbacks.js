const onFormSubmit = (values, options) => {
  console.log({ [options.name]: values });
};

export { onFormSubmit };
