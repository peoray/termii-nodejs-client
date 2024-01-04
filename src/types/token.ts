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
