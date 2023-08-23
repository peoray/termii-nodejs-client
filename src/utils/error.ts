/**
 * A custom error class for handling the library related errors.
 * @class BaseError
 */
export class BaseError extends Error {
  /**
   * The BaseError Constructor.
   * @param {Record<any,any>} options - A configuration object for errors.
   * @param {String} options.message - The error message if any.
   * @constructor BaseError
   */
  constructor(options: Record<any, any> = {}) {
    // const errorMessage = options.message || '' // Default to an empty string if options.message is not provided
    // super(errorMessage)
    // // Error.captureStackTrace(this, this.constructor)
    // this.name = this.constructor.name
    // this.message = options.message
    // this.stack = new Error().stack

    super()
    Error.captureStackTrace(this, this.constructor)
    this.name = this.constructor.name
    this.message = options.message
  }
}
