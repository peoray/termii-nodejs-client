import { Insights } from './insights'
import { IGetBalanceResponse, ISearchResponse } from '../../types'

jest.mock('../../api')
describe('Token class', () => {
  const apiKey = 'your_api_key'
  let insightsInstance: Insights

  beforeEach(() => {
    insightsInstance = new Insights(apiKey)
  })

  describe('Token Class', () => {
    it('should return user balance successfully', async () => {
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

    it('should search phone numbeer successfully', async () => {
      insightsInstance.useRequest = jest.fn().mockResolvedValue({
        data: {
          number: '2348139456675',
          status: 'DND not active on phone number',
          network: '64530',
          network_code: 'MTN Nigeria',
        } as ISearchResponse,
      })

      const result = await insightsInstance.search({
        phone_number: '23409011223344',
      })

      expect(result).toEqual({
        number: '2348139456675',
        status: 'DND not active on phone number',
        network: '64530',
        network_code: 'MTN Nigeria',
      })
    })
  })
})
