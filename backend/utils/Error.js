class Exception extends Error {
  static ExceptionCodes = {
    BAD_INPUT: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
  };

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

export default Exception ;
