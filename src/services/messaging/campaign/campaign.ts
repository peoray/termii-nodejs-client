import { TermiiCore } from '../../../api'
import {
  IFetchCampaignsResponse,
  IFetchCampaignHistoryResponse,
  ISendCampaign,
  ISendCampaignResponse,
} from '../../../types'
import { IAxiosStruct, handleErrors } from '../../../utils'

/**
 * Represents the Campaign class, extending TermiiCore, to interact with the Termii API for campaign-related functionalities.
 * @extends TermiiCore
 */
export class Campaign extends TermiiCore {
  /**
   * Creates an instance of Campaign.
   * @constructor
   * @param {string} apiKey - The API key used for authorization.
   */
  constructor(apiKey: string) {
    super(apiKey)
  }

  /**
   * Fetches a list of campaigns.
   * @param {number} [page] - The page number for paginated results (optional).
   * @returns {Promise<IFetchCampaignsResponse>} A promise that resolves with the list of campaigns or rejects with an error.
   */
  public async fetchCampaigns(page?: number): Promise<IFetchCampaignsResponse> {
    try {
      const requestObj: IAxiosStruct = {
        method: 'GET',
        url: `sms/campaigns?page=${page}`,
      }

      const response = await this.useRequest(requestObj)

      return response?.data as IFetchCampaignsResponse
    } catch (error) {
      return handleErrors(error)
    }
  }

  /**
   * Fetches the history of a specific campaign.
   * @param {string} campaign_id - The ID of the campaign to fetch history for.
   * @param {number} [page] - The page number for paginated results (optional).
   * @returns {Promise<IFetchCampaignHistoryResponse>} A promise that resolves with the campaign history or rejects with an error.
   */
  public async fetchCampaignHistory(
    campaign_id: string,
    page?: number
  ): Promise<IFetchCampaignHistoryResponse> {
    try {
      const requestObj: IAxiosStruct = {
        method: 'GET',
        url: `sms/campaigns/${campaign_id}?page=${page}`,
      }

      const response = await this.useRequest(requestObj)

      return response?.data as IFetchCampaignHistoryResponse
    } catch (error) {
      return handleErrors(error)
    }
  }

  /**
   * Sends a campaign.
   * @param {ISendCampaign} data - The payload containing the necessary information for sending the campaign.
   * @returns {Promise<ISendCampaignResponse>} A promise that resolves with the response from sending the campaign or rejects with an error.
   */
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
