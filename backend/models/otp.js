import { Schema, model } from "mongoose";

const OtpSchema = new Schema({
  emailOtp: { type: String },
  email: { type: String },
  createdAt: {
    type: Date,
    expires: "2h",
    default: Date.now,
  },
});

OtpSchema.index({ email: 1 });

export default model("Otp", OtpSchema);
