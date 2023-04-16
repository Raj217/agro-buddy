import { ExceptionCodes } from "../utils/Error.js";

export const welcome = async (req, res, next) => {
  return res
    .status(ExceptionCodes.REQUEST_FULFILLED)
    .json({ message: "Welcome" });
};
