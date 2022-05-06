export const checkEmptyFields = (objOfFields) => {
  let errors = {};

  for (let field in objOfFields) {
    if (!objOfFields[field].trim()) {
      errors[field] = true;
    }
  }

  return Object.keys(errors).length ? errors : false;
};

export const checkUser = (user, users) => {
  let userCheck = null;

  users.forEach((item) => {
    if (item.login === user.login && item.password === user.password) {
      userCheck = { login: item.login.trim(), isAdmin: item.isAdmin };
    }
  });

  return userCheck;
};
