import { Token } from './token'
import { ISendToken, ISendTokenResponse } from '../../types'

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
          to: '2349015581911',
          smsStatus: 'sent',
          status: 200,
        } as ISendTokenResponse,
      })

      const data: ISendToken = {
        message_type: 'NUMERIC',
        to: '2349015581911',
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
        to: '2349015581911',
        smsStatus: 'sent',
        status: 200,
      })
    })

    it('should handle errors and return undefined', async () => {
      // Mock the useRequest method to throw an error
      tokenInstance.useRequest = jest
        .fn()
        .mockRejectedValue(new Error('API error'))

      const data: ISendToken = {
        message_type: 'NUMERIC',
        to: '2349015581911',
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
