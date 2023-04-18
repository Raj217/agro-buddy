import { Schema, model } from "mongoose";
import UserRoles from "./constants.js";

const userSchema = new Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String },
    email: { type: String, required: true },
    password: { type: String, select: false },
    role: { type: String, required: true, enum: UserRoles },
    isEmailVerified: { type: Boolean, required: true, default: false },
  },
  { timestamps: true }
);

export default model("User", userSchema);
