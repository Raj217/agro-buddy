import { Schema, model } from "mongoose";

export const Constants = {
  DEFAULT_VALIDITY_MILLIS: 1000 * 60 * 60 * 12, // 12 hour validity
};

const OtpSchema = new Schema({
  emailOtp: { type: String },
  email: { type: String },
  validityDurationMillis: { type: Number },
});

OtpSchema.index({ email: 1 });

export default model("Otp", OtpSchema);
