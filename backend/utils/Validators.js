class Validators {
  static isValidEmail(email) {
    const re = new RegExp(
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    );
    return email.match(re) !== null;
  }
  static validateMinPasswordSize = (minPasswordSize) => {
    const minPasswordSizeString = minPasswordSize + "";
    return isInt(minPasswordSizeString, {
      min: 6,
    });
  };
  static validateOtp = (otp) => {
    return isInt(otp, {
      min: 6,
    });
  }
}

export default Validators;
