import { AxiosError } from 'axios'

/**
 * A custom error class for handling library-related errors.
 * @class BaseError
 * @extends Error
 */
export class BaseError extends Error {
  /**
   * The BaseError Constructor.
   * @param {Record<any,any>} options - A configuration object for errors.
   * @param {String} options.message - The error message if any.
   * @constructor BaseError
   */
  constructor(options: Record<any, any> = {}) {
    super()
    Error.captureStackTrace(this, this.constructor)
    this.name = this.constructor.name
    this.message = options.message || 'Something went wrong!'
  }
}

/**
 * Handles generic errors and extracts data from the Axios response if available.
 * @param {any} error - The error object.
 * @returns {any} - The extracted response data or undefined.
 */
export const handleErrors = (error: any) => {
  // Check if the error has a response property and extract data if available.
  return error instanceof BaseError ? error.message : error?.response?.data
}

/**
 * Handles Axios errors and extracts the error message from the AxiosError object.
 * @param {AxiosError} error - The Axios error object.
 * @returns {string} - The error message.
 */
export const handleAxiosError = (error: AxiosError): string => {
  // Extract the error message from the AxiosError object.
  return error?.message || 'An unexpected Network error occurred.'
}
