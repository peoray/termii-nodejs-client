import { Token } from './token'
import {
  ISendToken,
  ISendTokenResponse,
  ISendVoiceToken,
  ISendVoiceTokenResponse,
} from '../../types'

jest.mock('../../api')
describe('Token class', () => {
  const apiKey = 'your_api_key'
  let tokenInstance: Token

  beforeEach(() => {
    tokenInstance = new Token(apiKey)
  })

  describe('Token Class', () => {
    it('should send a token successfully', async () => {
      //   Mock the useRequest method to return a successful response
      tokenInstance.useRequest = jest.fn().mockResolvedValue({
        data: {
          pinId: '123456',
          to: '2349014581910',
          smsStatus: 'sent',
          status: 200,
        } as ISendTokenResponse,
      })

      const data: ISendToken = {
        message_type: 'NUMERIC',
        to: '2349014581910',
        from: 'Acme',
        channel: 'generic',
        pin_attempts: 3,
        pin_time_to_live: 1,
        pin_length: 4,
        pin_placeholder: '< 1234 >',
        message_text: 'Your verification code is 1234',
      }

      const result = await tokenInstance.sendToken(data)

      expect(result).toEqual({
        pinId: '123456',
        to: '2349014581910',
        smsStatus: 'sent',
        status: 200,
      })
    })

    it('should send a voice token successfully', async () => {
      //   Mock the useRequest method to return a successful response
      tokenInstance.useRequest = jest.fn().mockResolvedValue({
        data: {
          code: 'ok',
          message_id: '101974010419581212300029568',
          pin_id: 'fad4f438-655d-399a-a50a-b93e11b41323',
          message: 'Successfully Sent',
          balance: 1501.7,
          user: 'John Doe',
        } as ISendVoiceTokenResponse,
      })

      const data: ISendVoiceToken = {
        phone_number: '2349014581910',
        pin_attempts: 3,
        pin_time_to_live: 1,
        pin_length: 4,
      }

      const result = await tokenInstance.sendVoiceToken(data)

      expect(result).toEqual({
        code: 'ok',
        message_id: '101974010419581212300029568',
        pin_id: 'fad4f438-655d-399a-a50a-b93e11b41323',
        message: 'Successfully Sent',
        balance: 1501.7,
        user: 'John Doe',
      })
    })

    it('should handle errors and return undefined', async () => {
      // Mock the useRequest method to throw an error
      tokenInstance.useRequest = jest
        .fn()
        .mockRejectedValue(new Error('API error'))

      const data: ISendToken = {
        message_type: 'NUMERIC',
        to: '2349014581910',
        from: 'Acme',
        channel: 'generic',
        pin_attempts: 3,
        pin_time_to_live: 1,
        pin_length: 4,
        pin_placeholder: '< 1234 >',
        message_text: 'Your verification code is 1234',
      }

      const result = await tokenInstance.sendToken(data)

      expect(result).toBeUndefined()
    })
  })
})
