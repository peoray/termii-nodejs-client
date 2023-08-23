import { TermiiCore } from '../../api'
import { IAxiosStruct } from '../../utils'
// import { AxiosError } from 'axios'
// import { SendMessageDto } from './message.dto'
import { ISendMessageResponse, ISendMessage } from '../../types/message'
// import { ISendMessageResponse } from '../../types/message'

export class Message extends TermiiCore {
  constructor(apiKey: string) {
    super(apiKey)
  }
  public async sendMessage(data: ISendMessage): Promise<ISendMessageResponse> {
    // public async sendMessage(data: SendMessageDto) {
    // try {
    const requestObj: IAxiosStruct = {
      method: 'POST',
      url: `/sms/send`,
      data,
    }

    const message: ISendMessage = {
      to: '+2348138666495',
      from: 'Acme',
      // sms: 'Your SMS message here',
      type: 'plain',
      channel: 'whatsapp', // This should match one of the allowed values: 'dnd', 'generic', or 'whatsapp'
      media: {
        caption: 'image',
        url: 'https://i.imgur.com/1kK2i3E.jpg',
      },
    }

    // console.log(requestObj)
    console.log(message)

    const response = await this.useRequest(requestObj)
    return response?.data as ISendMessageResponse
    // } catch (error) {
    //   const { response } = error as AxiosError
    //   throw response
    // }
  }
}
