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

interface CampaignHistory {
  id: number
  sender: string
  receiver: string
  message: string
  message_abbreviation: string
  amount: number
  channel: string
  sms_type: string
  message_id: string
  status: string
  date_created: string
  last_updated: string
}

export interface IFetchCampaignsResponse extends BaseMetaResponse<Campaign> {}
export interface IFetchCampaignHistoryResponse
  extends BaseMetaResponse<CampaignHistory> {}
