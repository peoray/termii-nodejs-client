import { SenderId } from './index'
import {
  ISenderIDResponse,
  IRequestSenderID,
  IRequestSenderIDResponse,
} from '../../../types'
import { keys } from '../../../utils/env'

const message = new SenderId(keys[0])

const mockRequestSenderIdData: IRequestSenderID = {
  sender_id: 'testing',
  usecase: 'Testing! Working!! This is it!!!',
  company: 'Dexter Laboratory',
}

const requestResponse: IRequestSenderIDResponse = {
  code: 'ok',
  message:
    'Sender Id requested. You will be  contacted by your account manager.',
}

const responseData: ISenderIDResponse = {
  current_page: 1,
  data: [
    {
      sender_id: 'example_sender_id_1',
      status: 'pending',
      company: 'Example Company 1',
      usecase: 'Testing Usecase 1',
      country: 'Example Country 1',
      created_at: '2023-11-07T12:00:00',
    },
    {
      sender_id: 'example_sender_id_2',
      status: 'unblock',
      company: 'Example Company 2',
      usecase: 'Testing Usecase 2',
      country: 'Example Country 2',
      created_at: '2023-11-07T12:30:00',
    },
    // Add more sender IDs as needed
  ],
  first_page_url: 'https://example.com/api/first',
  from: 1,
  last_page: 1,
  last_page_url: 'https://example.com/api/last',
  next_page_url: null,
  path: 'https://example.com/api',
  per_page: 10,
  prev_page_url: null,
  to: 2,
  total: 2,
}

describe('Sender ID', () => {
  it('should fetch list of sender ids', async () => {
    try {
      const response = await message.fetchSenderIDs()

      expect(response).toEqual(responseData)
    } catch (error) {
      expect(error).toBeInstanceOf(Error)
    }
  })

  it('should request for a sender id', async () => {
    try {
      const response = await message.requestSenderID(mockRequestSenderIdData)

      expect(response).toEqual(requestResponse)
    } catch (error) {
      expect(error).toBeInstanceOf(Error)
    }
  })
})
