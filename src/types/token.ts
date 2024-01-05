import { BaseResponse } from './constants'

export interface ISendToken {
  message_type: 'NUMERIC' | 'ALPHANUMERIC'
  to: string
  from: string
  channel: 'dnd' | 'WhatsApp' | 'generic' | 'email'
  pin_attempts: number
  pin_time_to_live: number
  pin_length: number
  pin_placeholder: string
  message_text: string
}

export interface ISendTokenResponse {
  pinId: string
  to: string
  smsStatus: string
  status: number
}

export interface ISendVoiceToken {
  phone_number: string
  pin_attempts: number
  pin_time_to_live: number
  pin_length: number
}

export interface ISendVoiceTokenResponse extends BaseResponse {
  pin_id: string
}

export interface IMakeVoiceCall {
  phone_number: string
  code: number
}

export interface IMakeVoiceCallResponse extends BaseResponse {
  pin_id: string
}

export interface ISendEmailToken {
  email_address: string
  code: string
  email_configuration_id: string
}

export interface ISendEmailTokenResponse extends BaseResponse {}

export interface IVerifyToken {
  pin_id: string
  pin: string
}

export interface IVerifyTokenResponse {
  pin_id: string
  verified: boolean
  msisdn: string
}

export interface IInAppToken {
  pin_type: 'NUMERIC' | 'ALPHANUMERIC'
  phone_number: string
  pin_attempts: number
  pin_time_to_live: number
  pin_length: number
}

interface IInAppTokenData {
  pin_id: string
  otp: string
  phone_number: string
  phone_number_other: string
}

export interface IInAppTokenResponse {
  status: string
  data: IInAppTokenData
}
