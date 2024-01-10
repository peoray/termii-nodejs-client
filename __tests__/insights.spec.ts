import { Insights } from '../src/services/insights/insights'
import {
  IGetBalanceResponse,
  ISearchResponse,
  IStatusResponse,
} from '../src/types'

jest.mock('../src/api')
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

    it('should search phone number successfully', async () => {
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

    it('should detect a phone number successfully', async () => {
      insightsInstance.useRequest = jest.fn().mockResolvedValue({
        data: {
          result: [
            {
              routeDetail: {
                number: '2348753243651',
                ported: 0,
              },
              countryDetail: {
                countryCode: '234',
                mobileCountryCode: '621',
                iso: 'NG',
              },
              operatorDetail: {
                operatorCode: 'ANG',
                operatorName: 'Airtel Nigeria',
                mobileNumberCode: '20',
                mobileRoutingCode: '41',
                carrierIdentificationCode: '23433',
                lineType: 'Mobile',
              },
              status: 200,
            },
          ],
        } as IStatusResponse,
      })

      const result = await insightsInstance.getStatus({
        phone_number: '23409011223344',
        country_code: 'NG',
      })

      expect(result).toEqual({
        result: [
          {
            routeDetail: {
              number: '2348753243651',
              ported: 0,
            },
            countryDetail: {
              countryCode: '234',
              mobileCountryCode: '621',
              iso: 'NG',
            },
            operatorDetail: {
              operatorCode: 'ANG',
              operatorName: 'Airtel Nigeria',
              mobileNumberCode: '20',
              mobileRoutingCode: '41',
              carrierIdentificationCode: '23433',
              lineType: 'Mobile',
            },
            status: 200,
          },
        ],
      })
    })

    it('should return reports for message successfully', async () => {
      insightsInstance.useRequest = jest.fn().mockResolvedValue({
        data: [
          {
            sender: 'N-Alert',
            receiver: '233257883990',
            message: 'New year in a bit',
            amount: 1,
            reroute: 0,
            status: 'DND Active on Phone Number',
            sms_type: 'plain',
            send_by: 'sender',
            media_url: null,
            message_id: '5508751839629937023',
            notify_url: null,
            notify_id: null,
            created_at: '2020-08-15 12:36:42',
          },
        ],
      })

      const result = await insightsInstance.getHistory()

      expect(result).toEqual([
        {
          sender: 'N-Alert',
          receiver: '233257883990',
          message: 'New year in a bit',
          amount: 1,
          reroute: 0,
          status: 'DND Active on Phone Number',
          sms_type: 'plain',
          send_by: 'sender',
          media_url: null,
          message_id: '5508751839629937023',
          notify_url: null,
          notify_id: null,
          created_at: '2020-08-15 12:36:42',
        },
      ])
    })
  })
})
