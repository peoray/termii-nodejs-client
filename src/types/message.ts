export interface Media {
  url: string
  caption: string
}

export type ISendMessage =
  | {
      to: string | string[]
      from: string
      type: string
      channel: 'dnd' | 'generic' | 'whatsapp'
      sms: string
      media?: never
    }
  | {
      to: string | string[]
      from: string
      type: string
      channel: 'whatsapp'
      sms?: never
      media: Media
    }

export interface ISendBulkMessage {
  to: string[]
  from: string
  type: string
  channel: 'dnd' | 'generic' | 'whatsapp'
  sms: string
}

interface BaseResponse {
  code: string
  message_id: string
  message: string
  balance: number
  user: string
}

export interface ISendMessageResponse extends BaseResponse {
  message_id_str: string
}

export interface ISendBulkMessageResponse extends BaseResponse {}
