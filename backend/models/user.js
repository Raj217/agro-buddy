import { Schema, model } from 'mongoose';
import UserRoles from './constants.js';

const userSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: String, required: true, enum: UserRoles }
}, {timestamps: true});

export default model("User", userSchema);
