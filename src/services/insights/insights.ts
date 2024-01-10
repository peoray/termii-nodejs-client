import { TermiiCore } from '../../api'
import {
  IGetBalanceResponse,
  ISearchPayload,
  ISearchResponse,
  IStatusResponse,
  IStatusPayload,
  IHistoryPayload,
  IHistoryResponse,
} from '../../types'
import { IAxiosStruct, handleErrors } from '../../utils'

/**
 * Represents the Insights class, extending TermiiCore, to interact with the Termii API for insights-related functionality.
 * @extends TermiiCore
 */
export class Insights extends TermiiCore {
  /**
   * Creates an instance of Insights.
   * @constructor
   * @param {string} apiKey - The API key used for authorization.
   */
  constructor(apiKey: string) {
    super(apiKey)
  }

  /**
   * Fetches the balance information for the Termii account.
   * @returns {Promise<IGetBalanceResponse>} A promise that resolves with the balance information or rejects with an error.
   */
  public async getBalance(): Promise<IGetBalanceResponse> {
    try {
      const requestObj: IAxiosStruct = {
        method: 'GET',
        url: `/get-balance`,
      }

      const response = await this.useRequest(requestObj)

      return response?.data as IGetBalanceResponse
    } catch (error) {
      return handleErrors(error)
    }
  }

  /**
   * Searches for information related to a phone number, such as DND status.
   * @param {ISearchPayload} data - The payload containing the phone number to search.
   * @returns {Promise<ISearchResponse>} A promise that resolves with the search results or rejects with an error.
   */
  public async search(data: ISearchPayload): Promise<ISearchResponse> {
    try {
      const requestObj: IAxiosStruct = {
        method: 'GET',
        url: `/check/dnd?phone_number=${data.phone_number}`,
      }

      const response = await this.useRequest(requestObj)

      return response?.data as ISearchResponse
    } catch (error) {
      return handleErrors(error)
    }
  }

  /**
   * Fetches status information for a phone number.
   * @param {IStatusPayload} data - The payload containing the phone number and country code.
   * @returns {Promise<IStatusResponse>} A promise that resolves with the status information or rejects with an error.
   */
  public async getStatus(data: IStatusPayload): Promise<IStatusResponse> {
    try {
      const requestObj: IAxiosStruct = {
        method: 'GET',
        url: `/insight/number/query?phone_number=${data.phone_number}&country_code=${data.country_code}`,
      }

      const response = await this.useRequest(requestObj)

      return response?.data as IStatusResponse
    } catch (error) {
      return handleErrors(error)
    }
  }

  /**
   * Fetches the history of SMS messages, optionally filtered by message ID.
   * @param {IHistoryPayload} [data] - The payload containing optional parameters, such as message ID.
   * @returns {Promise<IHistoryResponse[]>} A promise that resolves with the SMS history or rejects with an error.
   */
  public async getHistory(data?: IHistoryPayload): Promise<IHistoryResponse[]> {
    try {
      const requestObj: IAxiosStruct = {
        method: 'GET',
        url: `/sms/inbox/?message_id=${data?.message_id}`,
      }

      const response = await this.useRequest(requestObj)

      return response?.data as IHistoryResponse[]
    } catch (error) {
      return handleErrors(error)
    }
  }
}
