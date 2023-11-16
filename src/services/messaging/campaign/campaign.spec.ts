import { Campaign } from './campaign'
import {
  IFetchCampaignHistoryResponse,
  IFetchCampaignsResponse,
} from '../../../types'

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

const fetchCampaignHistoryResponseData: IFetchCampaignHistoryResponse = {
  data: [
    {
      id: 64,
      sender: 'Termii',
      receiver: '2347089509657',
      message: 'Hi This is from Termii Campaign',
      message_abbreviation: 'Hi This is from Termii Campaign',
      amount: 1,
      channel: 'Generic',
      sms_type: 'plain',
      message_id:
        '0011551727393226622357573897694282599004522965786793671662369098835884420487860904021011663',
      status: 'Sent',
      date_created: '2020-01-26 07:24:29',
      last_updated: '2020-01-26 07:24:29',
    },
  ],
  links: {
    first: 'https://api.ng.termii.com/api/sms/campaigns/C5dbae7faa2b65?page=1',
    last: 'https://api.ng.termii.com/api/sms/campaigns/C5dbae7faa2b65?page=1',
    prev: null,
    next: null,
  },
  meta: {
    current_page: 1,
    from: 1,
    last_page: 1,
    path: 'https://api.ng.termii.com/api/sms/campaigns/C5dbae7faa2b65',
    per_page: 15,
    to: 1,
    total: 1,
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

  it('should fetch list of campaign history', async () => {
    try {
      const response = await campaignInstance.fetchCampaignHistory('12345678')

      expect(response).toEqual(fetchCampaignHistoryResponseData)
    } catch (error) {
      expect(error).toBeInstanceOf(Error)
    }
  })
})
