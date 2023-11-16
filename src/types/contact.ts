import { BaseMetaResponse } from './constants'

interface Contact {
  id: number
  pid: number
  phone_number: string
  email_address: string | null
  message: string | null
  company: string | null
  first_name: string | null
  last_name: string | null
  create_at: string
  updated_at: string
}

export interface IFetchContactsResponse extends BaseMetaResponse<Contact> {}
