import { TermiiCore } from '../../api'
import { IDeviceTemplate, IDeviceTemplateResponse } from '../../types'
import { IAxiosStruct, handleErrors } from '../../utils'

/**
 * Represents the Template class, extending TermiiCore, to interact with the Termii API for template-related functionalities.
 * @extends TermiiCore
 */
export class Template extends TermiiCore {
  /**
   * Creates an instance of Template.
   * @constructor
   * @param {string} apiKey - The API key used for authorization.
   */
  constructor(apiKey: string) {
    super(apiKey)
  }

  /**
   * Sends a message using a template.
   * @param {IDeviceTemplate} data - The payload containing the necessary information for sending the message with a template.
   * @returns {Promise<IDeviceTemplateResponse>} A promise that resolves with the response from sending the message or rejects with an error.
   */
  public async sendMessageWithTemplate(
    data: IDeviceTemplate
  ): Promise<IDeviceTemplateResponse> {
    try {
      const requestObj: IAxiosStruct = {
        method: 'POST',
        url: `/send/template`,
        data,
      }

      const response = await this.useRequest(requestObj)

      return response?.data as IDeviceTemplateResponse
    } catch (error) {
      return handleErrors(error)
    }
  }
}
