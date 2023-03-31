import Exception from "../../utils/Error.js";

export const defaultExceptionHandler = (err, req, res, next) => {
  if (res.headerSent) {
    return next(err);
  }

  console.error(err.stack);
  let statusCode = 500;
  let message = "Unknown error";
  if (err instanceof Exception) {
    console.log(err);
    statusCode = err.statusCode;
    message = err.message;
  }
  res.status(statusCode).send({ statusCode: statusCode, message: message });
};
