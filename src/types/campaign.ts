import { BaseMetaResponse } from './constants'

interface Campaign {
  campaign_id: string
  phone_book: string
  sender: string
  camp_type: string
  channel: string
  total_recipients: number
  run_at: string
  status: string
  created_at: string
}

export interface IFetchCampaignsResponse extends BaseMetaResponse<Campaign> {}
