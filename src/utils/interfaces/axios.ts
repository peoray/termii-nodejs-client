// import { AxiosRequestConfig } from 'axios'

// export interface IAxiosStruct extends AxiosRequestConfig {
export interface IAxiosStruct {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE'
  url: string
  data?: any
}
