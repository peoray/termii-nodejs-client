enum MessageType {
  NUMERIC = 'NUMERIC',
  ALPHANUMERIC = 'ALPHANUMERIC',
}

export interface ISendToken {
  message_type: MessageType
  to: string
  from: string
  channel: string
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
}
