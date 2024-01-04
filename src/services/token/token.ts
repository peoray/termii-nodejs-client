import { TermiiCore } from '../../api'
import { ISendToken, ISendTokenResponse } from '../../types'
import { IAxiosStruct, handleErrors } from '../../utils'

export class Token extends TermiiCore {
  constructor(apiKey: string) {
    super(apiKey)
  }

  public async sendToken(data: ISendToken): Promise<ISendTokenResponse> {
    try {
      const requestObj: IAxiosStruct = {
        method: 'POST',
        url: `/sms/otp/send`,
        data,
      }

      const response = await this.useRequest(requestObj)

      return response?.data as ISendTokenResponse
    } catch (error) {
      return handleErrors(error)
    }
  }
}
