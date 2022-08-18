var validator = require("validator");

export const validation = (input, errors) => {
  const errorArray = [];
  let error = "";
  for (const [key, condition] of Object.entries(errors)) {
    switch (key) {
      case "minLength":
        error = minLength(input, condition);
        break;
      case "required":
        error = required(input);
        break;
      case "isEmail":
        error = isEmail(input);
        break;
      default:
        error = "";
    }
    if (error.length > 0) {
      errorArray.push(error);
    }
  }
  return errorArray;
};

function minLength(input, condition) {
  let error = "";
  if (input.length < condition)
    error += `Must have at least ${condition} characters`;
  return error;
}

function required(input) {
  let error = "";
  if (input.length === 0) error += "Required";
  return error;
}

function isEmail(input) {
  let error = "";
  if (!validator.isEmail(input)) {
    error += "Please enter a valid email";
  }
  return error;
}
