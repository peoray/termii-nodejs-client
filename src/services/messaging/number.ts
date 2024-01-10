import { TermiiCore } from '../../api'
import {
  ISendMessageWithNumber,
  ISendMessageWithNumberResponse,
} from '../../types'
import { IAxiosStruct, handleErrors } from '../../utils'

export class Number extends TermiiCore {
  constructor(apiKey: string) {
    super(apiKey)
  }

  /**
   * Sends a message with an auto-generated sender number.
   * @param {ISendMessageWithNumber} data - The payload containing the necessary information for sending the message with a specific sender number.
   * @returns {Promise<ISendMessageWithNumberResponse>} A promise that resolves with the response from sending the message or rejects with an error.
   */
  public async sendMessageWithNumber(
    data: ISendMessageWithNumber
  ): Promise<ISendMessageWithNumberResponse> {
    try {
      const requestObj: IAxiosStruct = {
        method: 'POST',
        url: `/sms/number/send`,
        data,
      }

      const response = await this.useRequest(requestObj)

      return response?.data as ISendMessageWithNumberResponse
    } catch (error) {
      return handleErrors(error)
    }
  }
}
