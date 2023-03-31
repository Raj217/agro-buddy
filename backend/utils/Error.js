export const ExceptionCodes = {
  REQUEST_FULFILLED: 200,
  CREATED: 201,
  ACCEPTED: 202,
  BAD_INPUT: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  METHOD_NOT_ALLOWED: 405,
  NOT_ACCEPTABLE: 406,
  REQUEST_TIMEOUT: 408,
  CONFLICT: 409,
  INTERNAL_SERVER_ERROR: 500,
  NOT_IMPLEMENTED: 501,
  BAD_GATEWAY: 502,
  BAD_RESPONSE: 503,
  GATEWAY_TIMEOUT: 504,
  GATEWAY_ERROR: 505,
};

class Exception extends Error {
  constructor(message, statusCode, data) {
    super(message);

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, Exception);
    }
    this.statusCode = statusCode;
    this.message = message;
    this._name = "Exception";
    this._epoch = Date.now();
    this._data = data || {};
  }

  get epoch() {
    return this._epoch;
  }
  get data() {
    return this._data;
  }
}

export default Exception;
