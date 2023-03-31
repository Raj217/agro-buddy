import { verify } from "jsonwebtoken";
import { ExceptionCodes } from "../../utils/Error.js";
const config = process.env;

if (config.TOKEN_KEY === undefined) {
  console.log("Couldn't find token key");
}

export const verifyToken = (req, res, next) => {
  const token = req.headers["access-token"];

  if (!token) {
    return res
      .status(ExceptionCodes.FORBIDDEN)
      .send("Token is required for verification");
  }
  try {
    const decoded = verify(token, config.TOKEN_KEY);
    req.loggedInUser = decoded.user;
    if (!decoded.isEmailVerified)
      return res.status(ExceptionCodes.UNAUTHORIZED).send("Email not verified");
  } catch (err) {
    return res.status(ExceptionCodes.UNAUTHORIZED).send("Invalid Token");
  }
  return next();
};
