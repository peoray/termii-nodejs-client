export interface BaseResponse {
  code: string
  message_id: string
  message: string
  balance: number
  user: string
}

export interface Meta {
  current_page: number
  from: number | null
  last_page: number
  path: string
  per_page: number
  to: number | null
  total: number
}

export interface Links {
  first: string
  last: string
  prev: string | null
  next: string | null
}

export interface BaseMetaResponse<T> {
  data: T[]
  links: Links
  meta: Meta
}

export interface MessageResponse {
  message: string
}

export type ChannelType = 'dnd' | 'WhatsApp' | 'generic' | 'email'
