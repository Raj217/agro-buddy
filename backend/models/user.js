import { Schema, model } from 'mongoose';
import UserRoles from './constants.js';

const userSchema = new Schema({}, {timestamps: true});

export default model("User", userSchema);