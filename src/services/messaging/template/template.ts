import { TermiiCore } from '../../../api'
import { IDeviceTemplate, IDeviceTemplateResponse } from '../../../types'
import { IAxiosStruct, handleErrors } from '../../../utils'

export class Template extends TermiiCore {
  constructor(apiKey: string) {
    super(apiKey)
  }

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
