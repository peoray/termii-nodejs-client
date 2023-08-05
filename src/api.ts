import axios, { AxiosInstance } from 'axios'
import { IAxiosStruct, BaseError, BASE_URL, handleAxiosError } from './utils'

export class TermiiCore {
  public request: AxiosInstance

  constructor(public apiKey: string) {
    this.apiKey = apiKey
    this.request = axios.create({
      baseURL: BASE_URL,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
  }

  public async useRequest(req: IAxiosStruct) {
    try {
      const { method, url, data } = req

      if (method === 'GET' || method === 'DELETE') {
        return this.request({
          method,
          url,
          params: {
            api_key: this.apiKey,
          },
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
        throw new BaseError({ message: 'Invalid HTTP method' })
      }
    } catch (error) {
      throw new BaseError({ message: handleAxiosError(error) })
    }
  }
}
