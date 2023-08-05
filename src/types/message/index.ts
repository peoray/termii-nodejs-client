export type ChannelType = 'dnd' | 'generic' | 'whatsapp'

export interface Media {
  url: string
  caption: string
}

export interface ISendMessage {
  apiKey: string
  to: string
  from: string
  sms: string
  type: string
  channel: ChannelType
  media?: Media
}
export interface ISendMessageResponse {
  message_id: string
  message: string
  balance: string
  user: string
}
