import axios, { AxiosInstance } from 'axios'
import {
  IAxiosStruct,
  BaseError,
  BASE_URL,
  excludeFields,
  handleAxiosError,
} from './utils'

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
      const customHeaders = excludeFields(
        ['common', 'delete', 'get', 'head', 'put', 'patch', 'post'],
        this.request.defaults.headers
      )

      const getUrl = this.request.defaults.baseURL
      const requestInstance = await axios.request({
        url: `${getUrl}${req.url}`,
        method: req.method,
        headers: customHeaders,
        data: req.data,
      })
      return requestInstance
    } catch (error) {
      throw new BaseError({ message: handleAxiosError(error) })
    }
  }
}
