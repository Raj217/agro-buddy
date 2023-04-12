import { Schema, model } from "mongoose";

const CropData = Schema(
  {
    name: { type: String },
    images: { type: [String] },
    description: { type: String },
  },
  { timestamps: true }
);

export default model("CropData", CropData);
