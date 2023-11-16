import { Phonebook } from './phonebook'
import {
  IFetchPhonebooksResponse,
  ICreatePhonebook,
  ICreatePhonebookResponse,
} from '../../../types'

const phonebookInstance = new Phonebook('api-key')

const fetchPhonebooksResponseData: IFetchPhonebooksResponse = {
  data: [
    {
      id: 'f9c28de9-ab5a-4513-9c9f-338be8e1c390',
      name: 'labore',
      total_number_of_contacts: 0,
      date_created: '2021-07-01 14:44:42',
      last_updated: '2021-07-01 14:44:42',
    },
  ],
  links: {
    first: 'https://api.ng.termii.com/api/phonebooks?page=1',
    last: 'https://api.ng.termii.com/api/phonebooks?page=1',
    prev: null,
    next: null,
  },
  meta: {
    current_page: 1,
    from: 1,
    last_page: 1,
    path: 'https://api.ng.termii.com/api/phonebooks',
    per_page: 15,
    to: 8,
    total: 8,
  },
}

const createPhonebookData: ICreatePhonebook = {
  phonebook_name: 'Test',
  description: 'Phonebook for test',
}

const createPhonebookResponse: ICreatePhonebookResponse = {
  message: 'Phonebook added successfully',
}

describe('Phonebook', () => {
  it('should fetch list of phonebooks', async () => {
    try {
      const response = await phonebookInstance.fetchPhonebooks()

      expect(response).toEqual(fetchPhonebooksResponseData)
    } catch (error) {
      expect(error).toBeInstanceOf(Error)
    }
  })

  it('should create a phonebook', async () => {
    try {
      const response = await phonebookInstance.createPhonebook(
        createPhonebookData
      )

      expect(response).toEqual(createPhonebookResponse)
    } catch (error) {
      expect(error).toBeInstanceOf(Error)
    }
  })
})
