interface Phonebook {
  id: string
  name: string
  total_number_of_contacts: number
  date_created: string
  last_updated: string
}

interface Links {
  first: string
  last: string
  prev: string | null
  next: string | null
}

interface Meta {
  current_page: number
  from: number
  last_page: number
  path: string
  per_page: number
  to: number
  total: number
}

export interface IFetchPhonebooksResponse {
  data: Phonebook[]
  links: Links
  meta: Meta
}

export interface IPhonebook {
  phonebook_name: string
  description: string
}

export interface IPhonebookResponse {
  message: string
}
