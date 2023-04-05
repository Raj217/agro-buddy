import { Schema, model } from "mongoose";

const Image = Schema(
  {
    name: { type: String },
    images: { type: [String] },
  },
  { timestamps: true }
);

export default model("Image", Image);
