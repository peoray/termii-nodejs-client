import { TermiiCore } from '../../api'
import { IAxiosStruct, handleErrors } from '../../utils'
// import { AxiosError } from 'axios'
import {
  ISendMessageResponse,
  ISendMessage,
  ISendBulkMessage,
  ISendBulkMessageResponse,
} from '../../types/message'

/**
 * The Message class extends the TermiiCore class and provides methods for sending messages.
 * @class Message
 * @extends {TermiiCore}
 */
export class Message extends TermiiCore {
  /**
   * Constructs a new Message instance with the provided API key.
   * @constructor
   * @param {string} apiKey - The API key used for authorization.
   */
  constructor(apiKey: string) {
    super(apiKey)
  }

  /**
   * Sends a single message using the Termii API.
   * @param {ISendMessage} data - The message data to be sent.
   * @returns {Promise<ISendMessageResponse>} A promise that resolves with the API response for the sent message.
   */
  public async sendMessage(data: ISendMessage): Promise<ISendMessageResponse> {
    try {
      const requestObj: IAxiosStruct = {
        method: 'POST',
        url: `/sms/send`,
        data,
      }

      const response = await this.useRequest(requestObj)
      return response?.data as ISendMessageResponse
    } catch (error) {
      return handleErrors(error)
    }
  }

  /**
   * Sends messages in bulk using the Termii API.
   * @param {ISendBulkMessage} data - The bulk message data to be sent.
   * @returns {Promise<ISendBulkMessageResponse>} A promise that resolves with the API response for the sent bulk messages.
   */
  public async sendBulkMessage(
    data: ISendBulkMessage
  ): Promise<ISendBulkMessageResponse> {
    try {
      const requestObj: IAxiosStruct = {
        method: 'POST',
        url: `/sms/send/bulk`,
        data,
      }

      const response = await this.useRequest(requestObj)
      return response?.data as ISendBulkMessageResponse
    } catch (error) {
      return handleErrors(error)
    }
  }
}
