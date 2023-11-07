import { TermiiCore } from '../../../api'
import { ISenderIDResponse } from '../../../types'
import { IAxiosStruct } from '../../../utils'

export class SenderId extends TermiiCore {
  constructor(apiKey: string) {
    super(apiKey)
  }

  public async fetchSenderIDs(page?: number): Promise<ISenderIDResponse> {
    const requestObj: IAxiosStruct = {
      method: 'GET',
      url: `/sender-id`,
      page,
    }

    const response = await this.useRequest(requestObj)

    return response?.data as ISenderIDResponse
  }
}
