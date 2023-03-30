import { verify } from "jsonwebtoken";
const config = process.env;

if (config.TOKEN_KEY === undefined) {
  console.log("Couldn't find token key");
}

export const verifyToken = (req, res, next) => {
  const token = req.headers["access-token"];

  if (!token) {
    return res.status(403).send("Token is required for verification");
  }
  try {
    const decoded = verify(token, config.TOKEN_KEY);
    req.loggedInUser = decoded.user;
  } catch (err) {
    return res.status(401).send("Invalid Token");
  }
  return next();
};
