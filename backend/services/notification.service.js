import emailjs from "@emailjs/browser";

export const sendEmail = async (email, message) => {
  var templateParams = {
    to_name: '',
    from_name: '',
    to_email: email,
    message: message
  };
  emailjs.send(process.env.SERVICE_ID, process.env.TEMPLATE_ID, templateParams).then(
    function (response) {
      console.log("SUCCESS!", response.status, response.text);
    },
    function (err) {
      console.log("FAILED...", err);
    }
  );
};

export const sendOtp = async (email, otp, message) => {
  sendEmail(email, `OTP for ${email} : ${otp}, valid for 12 hours `);
  console.log(`OTP for ${email} : ${otp}, valid for 12 hours `);
};

export const sendResetLink = async (email, url) => {
  sendEmail(email, `Reset link for ${email}: ${url}`);
  console.log(`Reset link for ${email}: `, url);
};
