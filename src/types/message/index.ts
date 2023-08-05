export type ChannelType = 'dnd' | 'generic' | 'whatsapp'

export interface Media {
  url: string
  caption: string
}

export interface ISendMessage {
  api_key: string
  to: string | string[]
  from: string
  sms: string
  type: string
  channel: ChannelType
  media?: Media
}
export interface ISendMessageResponse {
  code: string
  message_id: string
  message_id_str: string
  message: string
  balance: string
  user: string
}
