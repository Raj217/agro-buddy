import { Schema, model } from "mongoose";

export const Constants = {
  DEFAULT_VALIDITY_MILLIS: 1, // 12 hour validity
};

const OtpSchema = new Schema(
  {
    emailOtp: { type: String },
    email: { type: String },
  },
  { "createdAt": 1, expireAfterSeconds: Constants.DEFAULT_VALIDITY_MILLIS }
);

OtpSchema.index({ email: 1 });

export default model("Otp", OtpSchema);
