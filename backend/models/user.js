import { Schema, model } from "mongoose";
import UserRoles from "./constants.js";
import Validators from "../utils/Validators.js";

const userSchema = new Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    password: {
      type: String,
      required: true,
      validate: {
        validator: Validators.validateMinPasswordSize,
        message: "size must be at least 6",
      },
    },
    role: { type: String, required: true, enum: UserRoles },
  },
  { timestamps: true }
);

export default model("User", userSchema);
