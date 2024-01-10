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
  IInAppToken,
  IInAppTokenResponse,
} from '../../types'
import { IAxiosStruct, handleErrors } from '../../utils'

/**
 * Represents the Token class, extending TermiiCore, to interact with the Termii API for token-related functionalities.
 * @extends TermiiCore
 */
export class Token extends TermiiCore {
  /**
   * Creates an instance of Token.
   * @constructor
   * @param {string} apiKey - The API key used for authorization.
   */
  constructor(apiKey: string) {
    super(apiKey)
  }

  /**
   * Sends an OTP token via SMS.
   * @param {ISendToken} data - The payload containing the necessary information for sending the token.
   * @returns {Promise<ISendTokenResponse>} A promise that resolves with the response from sending the token or rejects with an error.
   */
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

  /**
   * Sends an OTP token via voice call.
   * @param {ISendVoiceToken} data - The payload containing the necessary information for sending the voice token.
   * @returns {Promise<ISendVoiceTokenResponse>} A promise that resolves with the response from sending the voice token or rejects with an error.
   */
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

  /**
   * Makes a voice call for OTP verification.
   * @param {IMakeVoiceCall} data - The payload containing the necessary information for making the voice call.
   * @returns {Promise<IMakeVoiceCallResponse>} A promise that resolves with the response from making the voice call or rejects with an error.
   */
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

  /**
   * Sends an OTP token via email.
   * @param {ISendEmailToken} data - The payload containing the necessary information for sending the email token.
   * @returns {Promise<ISendEmailTokenResponse>} A promise that resolves with the response from sending the email token or rejects with an error.
   */
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

  /**
   * Verifies an OTP token received via SMS.
   * @param {IVerifyToken} data - The payload containing the necessary information for verifying the token.
   * @returns {Promise<IVerifyTokenResponse>} A promise that resolves with the response from verifying the token or rejects with an error.
   */
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

  /**
   * Generates an OTP token for in-app use.
   * @param {IInAppToken} data - The payload containing the necessary information for generating the in-app token.
   * @returns {Promise<IInAppTokenResponse>} A promise that resolves with the response from generating the in-app token or rejects with an error.
   */
  public async inAppToken(data: IInAppToken): Promise<IInAppTokenResponse> {
    try {
      const requestObj: IAxiosStruct = {
        method: 'POST',
        url: `/sms/otp/generate`,
        data,
      }

      const response = await this.useRequest(requestObj)

      return response?.data as IInAppTokenResponse
    } catch (error) {
      return handleErrors(error)
    }
  }
}
