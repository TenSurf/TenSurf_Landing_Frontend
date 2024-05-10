// validator:
// import isStrongPassword from 'validator/lib/isStrongPassword';

// *****************************************************************************************************
// ===== main function ==============================================================================>>>
const PasswordValidation = ({
  inputPassword = '',
  setting = {
    minLength: 8,
    minUppercase: 1,
    minLowercase: 1,
    minNumbers: 1,
    minSymbols: 1
  }
}: {
  inputPassword: string;
  setting?: {
    minLength: number;
    minUppercase: number;
    minLowercase: number;
    minNumbers: number;
    minSymbols: number;
  };
}) => {
  // password Strangeness ===============>>>
  let validation = {
    minLength: 0,
    minUppercase: 0,
    minLowercase: 0,
    minNumbers: 0,
    minSymbols: 0,
    value: 0,
    isValidate: false
  };

  validation = {
    ...validation,
    // isValidate: isStrongPassword(inputPassword, setting)
  };

  validation = {
    ...validation,
    // value: isStrongPassword(inputPassword, { returnScore: true })
  };
  // if (
  //   isStrongPassword(inputPassword, {
  //     minLength: setting.minLength,
  //     minUppercase: 0,
  //     minLowercase: 0,
  //     minNumbers: 0,
  //     minSymbols: 0
  //   })
  // ) {
  //   validation = {
  //     ...validation,
  //     minLength: 1
  //   };
  // } else
  //   validation = {
  //     ...validation,
  //     minLength: 0
  //   };

  // if (
  //   isStrongPassword(inputPassword, {
  //     minUppercase: setting.minUppercase,
  //     minLength: 0,
  //     minLowercase: 0,
  //     minNumbers: 0,
  //     minSymbols: 0
  //   })
  // ) {
  //   validation = {
  //     ...validation,
  //     minUppercase: 1
  //   };
  // } else
  //   validation = {
  //     ...validation,
  //     minUppercase: 0
  //   };

  // if (
  //   isStrongPassword(inputPassword, {
  //     minUppercase: 0,
  //     minLength: 0,
  //     minLowercase: setting.minLowercase,
  //     minNumbers: 0,
  //     minSymbols: 0
  //   })
  // ) {
  //   validation = {
  //     ...validation,
  //     minLowercase: 1
  //   };
  // } else
  //   validation = {
  //     ...validation,
  //     minLowercase: 0
  //   };

  // if (
  //   isStrongPassword(inputPassword, {
  //     minUppercase: 0,
  //     minLength: 0,
  //     minLowercase: 0,
  //     minNumbers: setting.minNumbers,
  //     minSymbols: 0
  //   })
  // ) {
  //   validation = {
  //     ...validation,
  //     minNumbers: 1
  //   };
  // } else
  //   validation = {
  //     ...validation,
  //     minNumbers: 0
    // };

  // if (
  //   isStrongPassword(inputPassword, {
  //     minUppercase: 0,
  //     minLength: 0,
  //     minLowercase: 0,
  //     minNumbers: 0,
  //     minSymbols: setting.minSymbols
  //   })
  // ) {
  //   validation = {
  //     ...validation,
  //     minSymbols: 1
  //   };
  // } else
  //   validation = {
  //     ...validation,
  //     minSymbols: 0
  //   };

  return validation;
};

export default PasswordValidation;
