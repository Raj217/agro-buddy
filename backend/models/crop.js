import { Schema, model } from "mongoose";

const CropSchema = Schema(
  {
    name: {
      type: String,
      required: [true, "Crop name is required"],
      unique: true,
      trim: true,
      collation: {
        locale: "en",
        strength: 2,
      },
    },
    images: { type: [String] },
    details: {
      type: [
        {
          nitrogen: { type: Number },
          phosphorus: { type: Number },
          potassium: { type: Number },
          temperature: { type: Number },
          humidity: { type: Number },
          pH: { type: Number },
          rainfall: { type: Number },
        },
      ],
    },
  },
  { timestamps: true }
);

export default model("Crop", CropSchema);
