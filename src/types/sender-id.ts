interface Paginator<T> {
  current_page: number
  data: T[]
  first_page_url: string
  from: number
  last_page: number
  last_page_url: string
  next_page_url: string
  path: string
  per_page: number
  prev_page_url: string | null
  to: number
  total: number
}

interface ISenderID {
  sender_id: string
  status: 'unblock' | 'pending' | 'block'
  company: string | null
  usecase: string | null
  country: string | null
  created_at: string
}

export interface IRequestSenderID {
  sender_id: string
  company: string
  usecase: string
}

export interface IRequestSenderIDResponse {
  code: string
  message: string
}

export interface ISenderIDResponse extends Paginator<ISenderID> {}
