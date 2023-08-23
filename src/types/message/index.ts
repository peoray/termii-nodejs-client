export type ChannelType = 'dnd' | 'generic' | 'whatsapp'

export interface Media {
  url: string
  caption: string
}

// export interface ISendMessageWithSMS {
//   to: string | string[]
//   from: string
//   type: string
//   channel: 'dnd' | 'generic' | 'whatsapp'
//   sms: string
//   media?: never // Ensure media is not present when sms is used
// }

// export interface ISendMessageWithMedia {
//   to: string | string[]
//   from: string
//   type: string
//   channel: 'whatsapp'
//   sms?: never // Ensure sms is not present when media is used
//   media: Media
// }

// export type ISendMessage = ISendMessageWithSMS | ISendMessageWithMedia

export interface Media {
  url: string
  caption: string
}

// Define a base message type with common properties.
// export interface BaseMessage {
//   to: string | string[]
//   from: string
//   type: string
//   channel: 'dnd' | 'generic' | 'whatsapp'
// }

// Define a type for messages with only SMS.
// export type SMSMessage = BaseMessage & {
//   sms: string
//   media?: never
// }

// Define a type for messages with media allowed only when channel is 'whatsapp'.
// export type MediaMessage = BaseMessage & {
//   sms?: never
//   channel: 'whatsapp'
//   media: Media
// }

// Create a union type for messages that can be either SMS or Media.
// export type ISendMessage = SMSMessage | MediaMessage

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
  channel: string
  sms: string
}

export interface ISendMessageResponse {
  code: string
  message_id: string
  message_id_str: string
  message: string
  balance: number
  user: string
}
