import { Number } from './number'
import {
  ISendMessageWithNumber,
  ISendMessageWithNumberResponse,
} from '../../../types'

const numberInstance = new Number('api-key')

const mockRequest: ISendMessageWithNumber = {
  to: '2349012672711',
  sms: 'Testing! Working!! This is it!!!',
}

const requestResponse: ISendMessageWithNumberResponse = {
  code: '200',
  message_id: '123456789',
  message: 'Message sent successfully',
  balance: 50.0,
  user: 'JohnDoe',
}

describe('Number', () => {
  it('should send a message with an auto-generated number', async () => {
    try {
      const response = await numberInstance.sendMessageWithNumber(mockRequest)

      expect(response).toHaveBeenCalledWith(mockRequest)

      expect(response.code).toHaveProperty('200')

      expect(response).toEqual(requestResponse)
    } catch (error) {
      expect(error).toBeInstanceOf(Error)
    }
  })
})
