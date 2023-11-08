import { TermiiCore } from '../../../api'
import {
  ISenderIDResponse,
  IRequestSenderID,
  IRequestSenderIDResponse,
} from '../../../types'
import { IAxiosStruct, handleErrors } from '../../../utils'

/**
 * A class handling Sender ID functionalities, extends TermiiCore.
 */
export class SenderId extends TermiiCore {
  constructor(apiKey: string) {
    super(apiKey)
  }

  /**
   * Fetches sender IDs.
   * @param {number} [page] - Optional page number for pagination.
   * @returns {Promise<ISenderIDResponse>} - A promise containing the response with sender IDs.
   */
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

  /**
   * Requests a new Sender ID.
   * @param {IRequestSenderID} data - Data for requesting a new Sender ID.
   * @returns {Promise<IRequestSenderIDResponse>} - A promise containing the response to the Sender ID request.
   */
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
