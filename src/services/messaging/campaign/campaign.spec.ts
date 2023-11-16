import { Campaign } from './campaign'
import { IFetchCampaignsResponse } from '../../../types'

const campaignInstance = new Campaign('api-key')

const fetchCampaignsResponseData: IFetchCampaignsResponse = {
  data: [
    {
      campaign_id: 'C60e30b2c806da',
      phone_book: 'test',
      sender: 'Termii',
      camp_type: 'scheduled',
      channel: '-',
      total_recipients: 0,
      run_at: '2022-07-05 00:00:00',
      status: 'Scheduled',
      created_at: '2021-07-05T13:37:48.000000Z',
    },
  ],
  links: {
    first: 'https://api.ng.termii.com/api/sms/campaigns?page=1',
    last: 'https://api.ng.termii.com/api/sms/campaigns?page=1',
    prev: null,
    next: null,
  },
  meta: {
    current_page: 1,
    from: 1,
    last_page: 1,
    path: 'https://api.ng.termii.com/api/sms/campaigns',
    per_page: 15,
    to: 11,
    total: 11,
  },
}

describe('Contact', () => {
  it('should fetch list of campaigns', async () => {
    try {
      const response = await campaignInstance.fetchCampaigns()

      expect(response).toEqual(fetchCampaignsResponseData)
    } catch (error) {
      expect(error).toBeInstanceOf(Error)
    }
  })
})
