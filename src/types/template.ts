import { BaseResponse } from './constants'

interface Data {
  product_name: string
  otp: number
  expiry_time: string
}

export interface IDeviceTemplate {
  phone_number: string
  device_id: string
  template_id: string
  data: Data
}

export interface IDeviceTemplateResponse extends BaseResponse {}
