export const sendEmail = async (email) => {};

export const sendOtp = async (email, otp, message) => {
  console.log(`OTP for ${email} : ${otp}, valid for 12 hours `);
};

export const sendResetLink = async (email, url) => {
  console.log(`Reset link for ${email}: `, url);
};
