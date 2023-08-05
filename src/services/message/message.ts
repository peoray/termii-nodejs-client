import { TermiiCore } from '../../api'
import { BaseError, IAxiosStruct, handleAxiosError } from '../../utils'
import { SendMessageDto } from './message.dto'

export class Message extends TermiiCore {
  constructor(apiKey: string) {
    super(apiKey)
  }
  public async sendMessage(data: SendMessageDto) {
    try {
      const requestObj: IAxiosStruct = {
        method: 'POST',
        url: `/sms/send`,
        data,
      }

      const response = await this.useRequest(requestObj)
      return response.data
    } catch (error) {
      throw new BaseError({ message: handleAxiosError(error) })
    }
  }
}
