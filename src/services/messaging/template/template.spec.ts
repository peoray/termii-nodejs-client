import { Template } from './template'
import { IDeviceTemplate, IDeviceTemplateResponse } from '../../../types'

const templateInstance = new Template('api-key')

const mockRequest: IDeviceTemplate = {
  phone_number: '+1234567890',
  device_id: 'device123',
  template_id: 'template456',
  data: {
    product_name: 'Dummy Product',
    otp: 123456,
    expiry_time: '2023-11-16T12:00:00Z',
  },
}

const requestResponse: IDeviceTemplateResponse = {
  code: '200',
  message_id: '123456789',
  message: 'Message sent successfully',
  balance: 50.0,
  user: 'JohnDoe',
}

describe('Template', () => {
  it('should send a message with a template', async () => {
    try {
      const response = await templateInstance.sendMessageWithTemplate(
        mockRequest
      )
      expect(response).toHaveBeenCalledWith(mockRequest)
      expect(response.code).toHaveProperty('200')
      expect(response).toEqual(requestResponse)
    } catch (error) {
      expect(error).toBeInstanceOf(Error)
    }
  })
})
