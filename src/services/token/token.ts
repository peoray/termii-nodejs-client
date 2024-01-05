import { TermiiCore } from '../../api'
import {
  ISendToken,
  ISendTokenResponse,
  ISendVoiceToken,
  ISendVoiceTokenResponse,
  IMakeVoiceCall,
  IMakeVoiceCallResponse,
  ISendEmailToken,
  ISendEmailTokenResponse,
  IVerifyToken,
  IVerifyTokenResponse,
} from '../../types'
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

  public async sendVoiceToken(
    data: ISendVoiceToken
  ): Promise<ISendVoiceTokenResponse> {
    try {
      const requestObj: IAxiosStruct = {
        method: 'POST',
        url: `/sms/otp/send/voice`,
        data,
      }

      const response = await this.useRequest(requestObj)

      return response?.data as ISendVoiceTokenResponse
    } catch (error) {
      return handleErrors(error)
    }
  }

  public async makeVoiceCall(
    data: IMakeVoiceCall
  ): Promise<IMakeVoiceCallResponse> {
    try {
      const requestObj: IAxiosStruct = {
        method: 'POST',
        url: `/sms/otp/call`,
        data,
      }

      const response = await this.useRequest(requestObj)

      return response?.data as IMakeVoiceCallResponse
    } catch (error) {
      return handleErrors(error)
    }
  }

  public async sendEmailToken(
    data: ISendEmailToken
  ): Promise<ISendEmailTokenResponse> {
    try {
      const requestObj: IAxiosStruct = {
        method: 'POST',
        url: `/email/otp/send`,
        data,
      }

      const response = await this.useRequest(requestObj)

      return response?.data as ISendEmailTokenResponse
    } catch (error) {
      return handleErrors(error)
    }
  }

  public async verifyToken(data: IVerifyToken): Promise<IVerifyTokenResponse> {
    try {
      const requestObj: IAxiosStruct = {
        method: 'POST',
        url: `/sms/otp/verify`,
        data,
      }

      const response = await this.useRequest(requestObj)

      return response?.data as IVerifyTokenResponse
    } catch (error) {
      return handleErrors(error)
    }
  }
}
