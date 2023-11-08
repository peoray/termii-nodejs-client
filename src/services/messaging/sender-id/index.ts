import { TermiiCore } from '../../../api'
import {
  ISenderIDResponse,
  IRequestSenderID,
  IRequestSenderIDResponse,
} from '../../../types'
import { IAxiosStruct, handleErrors } from '../../../utils'

export class SenderId extends TermiiCore {
  constructor(apiKey: string) {
    super(apiKey)
  }

  public async fetchSenderIDs(page?: number): Promise<ISenderIDResponse> {
    try {
      const requestObj: IAxiosStruct = {
        method: 'GET',
        url: `/sender-id`,
        page,
      }

      const response = await this.useRequest(requestObj)

      return response?.data as ISenderIDResponse
    } catch (error) {
      return handleErrors(error)
    }
  }

  public async requestSenderID(
    data: IRequestSenderID
  ): Promise<IRequestSenderIDResponse> {
    try {
      const requestObj: IAxiosStruct = {
        method: 'POST',
        url: `/sender-id/request`,
        data,
      }

      const response = await this.useRequest(requestObj)

      return response?.data as IRequestSenderIDResponse
    } catch (error) {
      return handleErrors(error)
    }
  }
}
