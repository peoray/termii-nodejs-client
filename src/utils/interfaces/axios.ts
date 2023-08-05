// import { AxiosRequestConfig } from 'axios'

// export interface IAxiosStruct extends AxiosRequestConfig {
export interface IAxiosStruct {
  // method: 'GET' | 'POST' | 'PUT' | 'DELETE'
  method: string
  url: string
  data?: any
  params?: any
}
