import { BaseResponse } from './constants'

export interface ISendMessageWithNumber {
  to: string
  sms: string
}

export interface ISendMessageWithNumberResponse extends BaseResponse {}
