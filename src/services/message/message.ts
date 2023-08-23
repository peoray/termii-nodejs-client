import { TermiiCore } from '../../api'
import { IAxiosStruct } from '../../utils'
// import { AxiosError } from 'axios'
import {
  ISendMessageResponse,
  ISendMessage,
  ISendBulkMessage,
} from '../../types/message'

export class Message extends TermiiCore {
  constructor(apiKey: string) {
    super(apiKey)
  }
  public async sendMessage(data: ISendMessage): Promise<ISendMessageResponse> {
    // try {
    const requestObj: IAxiosStruct = {
      method: 'POST',
      url: `/sms/send`,
      data,
    }

    const response = await this.useRequest(requestObj)
    return response?.data as ISendMessageResponse
    // } catch (error) {
    //   const { response } = error as AxiosError
    //   throw response
    // }
  }

  public async sendBulkMessage(
    data: ISendBulkMessage
  ): Promise<ISendMessageResponse> {
    const requestObj: IAxiosStruct = {
      method: 'POST',
      url: `/sms/send/bulk`,
      data,
    }

    const response = await this.useRequest(requestObj)
    return response?.data as ISendMessageResponse
  }
}
