import { Schema, model } from "mongoose";

const ResetPasswordSchema = Schema({
  code: { type: String },
  email: { type: String },
  createdAt: {
    type: Date,
    expires: "1h",
    default: Date.now,
  },
});

ResetPasswordSchema.index({ email: 1 });

export default model("ResetPassword", ResetPasswordSchema);
