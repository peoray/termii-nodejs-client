import { BaseMetaResponse } from './constants'

interface Phonebook {
  id: string
  name: string
  total_number_of_contacts: number
  date_created: string
  last_updated: string
}

export interface IFetchPhonebooksResponse extends BaseMetaResponse<Phonebook> {}

export interface IPhonebook {
  phonebook_name: string
  description: string
}

export interface IPhonebookResponse {
  message: string
}
