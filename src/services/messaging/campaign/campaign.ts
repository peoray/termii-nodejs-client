import { TermiiCore } from '../../../api'
import { IFetchCampaignsResponse } from '../../../types'
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
}
