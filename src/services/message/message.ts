import { TermiiCore } from '../../api'
import { BaseError, handleAxiosError } from '../../utils'
import { SendMessageDto } from './message.dto'

export class Message extends TermiiCore {
  constructor(apiKey: string) {
    super(apiKey)
  }
  public async sendSMS(data: SendMessageDto) {
    try {
      const requestObj = {
        method: 'POST',
        url: `/sms/send`,
        data,
      }

      const response = await this.useRequest(requestObj)
      return response
      //   return data
    } catch (error) {
      throw new BaseError({ message: handleAxiosError(error) })
    }
  }
}
