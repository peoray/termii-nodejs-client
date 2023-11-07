import axios, { AxiosInstance } from 'axios'
import { IAxiosStruct, BaseError, BASE_URL, handleErrors } from './utils'

/**
 * Represents the TermiiCore class, which provides an interface for making HTTP requests using Axios with a specific API key.
 */
export class TermiiCore {
  /**
   * The AxiosInstance used to make HTTP requests.
   * @type {AxiosInstance}
   */
  public request: AxiosInstance

  /**
   * Constructs a new TermiiCore instance.
   * @param {string} apiKey - The API key used for authentication in API requests.
   */
  constructor(public apiKey: string) {
    this.apiKey = apiKey
    // Create an Axios instance with a base URL and common headers.
    this.request = axios.create({
      baseURL: BASE_URL,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
  }

  /**
   * Makes an HTTP request using Axios based on the provided request structure.
   * @param {IAxiosStruct} req - The request structure containing method, URL, and data.
   * @returns {Promise} A promise that resolves with the Axios response or rejects with an error.
   */
  public async useRequest(req: IAxiosStruct) {
    try {
      const { method, url, data, page } = req

      if (method === 'GET' || method === 'DELETE') {
        const params: Record<string, any> = {
          api_key: this.apiKey,
        }

        // Add 'page' to the params if it's provided in the request
        if (method === 'GET' && page !== undefined) {
          params.page = page
        }

        return this.request({
          method,
          url,
          params,
        })
      } else if (method === 'POST' || method === 'PUT') {
        return this.request({
          method,
          url,
          data: {
            ...data,
            api_key: this.apiKey,
          },
        })
      } else {
        // If the HTTP method is invalid, throw a BaseError.
        throw new BaseError({ message: 'Invalid HTTP method' })
      }
    } catch (error) {
      // Catch any errors that occur during the request and wrap them in a BaseError.
      throw new BaseError({ message: handleErrors(error) })
    }
  }
}
