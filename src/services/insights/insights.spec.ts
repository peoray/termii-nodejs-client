import { Insights } from './insights'
import { IGetBalanceResponse } from '../../types'

jest.mock('../../api')
describe('Token class', () => {
  const apiKey = 'your_api_key'
  let insightsInstance: Insights

  beforeEach(() => {
    insightsInstance = new Insights(apiKey)
  })

  describe('Token Class', () => {
    it('should send a token successfully', async () => {
      insightsInstance.useRequest = jest.fn().mockResolvedValue({
        data: {
          user: 'John Doe',
          balance: 2340,
          currency: 'NGN',
        } as IGetBalanceResponse,
      })

      const result = await insightsInstance.getBalance()

      expect(result).toEqual({
        user: 'John Doe',
        balance: 2340,
        currency: 'NGN',
      })
    })
  })
})
