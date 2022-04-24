const handleErrors = ({errors}) => {
  const err = {};
  errors.forEach((e) => {
    err[`${e.path}`] = "This field is required";
  });
  return err;
};

module.exports = {handleErrors}
