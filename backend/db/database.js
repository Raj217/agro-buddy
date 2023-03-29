import mongoose from "mongoose";
import * as dotenv from "dotenv";
dotenv.config();

const { MONGO_URI } = process.env;

/// Couldn't find MONGO_URI in env
if (MONGO_URI === undefined) {
  console.log("Couldn't find mongo uri. Exiting now... ");
  process.exit(0);
}

export const connect = () => {
  // Connect to database
  mongoose
    .connect(MONGO_URI)
    .then(() => console.log("Successfully Connected to database"))
    .catch((err) => {
      console.log("Database connection failed. Due to  ");
      console.error(err);
      console.log("Exiting now... ");
      process.exit(0);
    });
};
