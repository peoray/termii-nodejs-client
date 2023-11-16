import { Contact } from './contact'
import { IFetchContactsResponse } from '../../../types'

const contactInstance = new Contact('api-key')

const fetchContactsResponseData: IFetchContactsResponse = {
  data: [
    {
      id: 3,
      pid: 4,
      phone_number: '2347062609181',
      email_address: null,
      message: null,
      company: null,
      first_name: null,
      last_name: null,
      create_at: '2021-06-30 12:02:15',
      updated_at: '2021-06-30 12:02:15',
    },
  ],
  links: {
    first:
      'https://api.ng.termii.com/api/phonebooks/04c3ebcc-3a7e-485a-88c1-68e731386f77/contacts?page=1',
    last:
      'https://api.ng.termii.com/api/phonebooks/04c3ebcc-3a7e-485a-88c1-68e731386f77/contacts?page=1',
    prev: null,
    next: null,
  },
  meta: {
    current_page: 1,
    from: 1,
    last_page: 1,
    path:
      'https://api.ng.termii.com/api/phonebooks/04c3ebcc-3a7e-485a-88c1-68e731386f77/contacts',
    per_page: 25,
    to: 22,
    total: 22,
  },
}

describe('Contact', () => {
  it('should fetch list of contacts', async () => {
    try {
      const response = await contactInstance.fetchContacts('123456')

      expect(response).toEqual(fetchContactsResponseData)
    } catch (error) {
      expect(error).toBeInstanceOf(Error)
    }
  })
})
