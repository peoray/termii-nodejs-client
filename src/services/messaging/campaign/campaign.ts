import { TermiiCore } from '../../../api'
import {
  IFetchCampaignsResponse,
  IFetchCampaignHistoryResponse,
  ISendCampaign,
  ISendCampaignResponse,
} from '../../../types'
import { IAxiosStruct, handleErrors } from '../../../utils'

export class Campaign extends TermiiCore {
  constructor(apiKey: string) {
    super(apiKey)
  }

  public async fetchCampaigns(page?: number): Promise<IFetchCampaignsResponse> {
    try {
      const requestObj: IAxiosStruct = {
        method: 'GET',
        url: `sms/campaigns`,
        page,
      }

      const response = await this.useRequest(requestObj)

      return response?.data as IFetchCampaignsResponse
    } catch (error) {
      return handleErrors(error)
    }
  }

  public async fetchCampaignHistory(
    campaign_id: string,
    page?: number
  ): Promise<IFetchCampaignHistoryResponse> {
    try {
      const requestObj: IAxiosStruct = {
        method: 'GET',
        url: `sms/campaigns/${campaign_id}`,
        page,
      }

      const response = await this.useRequest(requestObj)

      return response?.data as IFetchCampaignHistoryResponse
    } catch (error) {
      return handleErrors(error)
    }
  }

  public async sendCampaign(
    data: ISendCampaign
  ): Promise<ISendCampaignResponse> {
    try {
      const requestObj: IAxiosStruct = {
        method: 'POST',
        url: `/sms/campaigns/send`,
        data,
      }

      const response = await this.useRequest(requestObj)

      return response?.data as ISendCampaignResponse
    } catch (error) {
      return handleErrors(error)
    }
  }
}
