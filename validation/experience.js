const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateExperienceInput(data) {
  let errors = {};

  data.title = !isEmpty(data.title) ? data.title : '';
  data.from = !isEmpty(data.from) ? data.from : '';

  if (Validator.isEmpty(data.title)) {
    errors.title = 'Title field is required!';
  }

  if (Validator.isEmpty(data.from)) {
    errors.from = 'From field is required!';
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
