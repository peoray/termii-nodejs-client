import { Message } from './message'
import {
  ISendBulkMessage,
  ISendMessage,
  ISendMessageResponse,
} from '../../../types'

const message = new Message('api-key')

const mockMessage: ISendMessage = {
  to: '+2348012345678',
  sms: 'Hello World',
  from: 'Acme',
  type: 'plain',
  channel: 'generic',
}

const mockBulkMessage: ISendBulkMessage = {
  to: ['+2348012345678'],
  sms: 'Hello World',
  from: 'Acme',
  type: 'plain',
  channel: 'generic',
}

const responseData: ISendMessageResponse = {
  code: '200',
  message_id: '123456789',
  message_id_str: '123456789',
  message: 'Message sent successfully',
  balance: 50.0, // Assuming this is a balance in some currency
  user: 'JohnDoe', // The user who sent the message
}

describe('Message', () => {
  it('should send a message', async () => {
    try {
      const response = await message.sendMessage(mockMessage)

      expect(response).toHaveBeenCalledWith(mockMessage)
      expect(response).toEqual(responseData)
    } catch (error) {
      expect(error).toBeInstanceOf(Error)
    }
  })

  it('should send a bulk message', async () => {
    try {
      const response = await message.sendBulkMessage(mockBulkMessage)

      expect(response).toHaveBeenCalledWith(mockBulkMessage)
      expect(response).toEqual(responseData)
    } catch (error) {
      expect(error).toBeInstanceOf(Error)
    }
  })
})
