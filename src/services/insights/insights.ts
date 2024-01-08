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

export class Insights extends TermiiCore {
  constructor(apiKey: string) {
    super(apiKey)
  }

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

  public async search(data: ISearchPayload): Promise<ISearchResponse> {
    try {
      const requestObj: IAxiosStruct = {
        method: 'GET',
        url: `/check/dnd?phone_number=${data.phone_number}`,
        data,
      }

      const response = await this.useRequest(requestObj)

      return response?.data as ISearchResponse
    } catch (error) {
      return handleErrors(error)
    }
  }

  public async getStatus(data: IStatusPayload): Promise<IStatusResponse> {
    try {
      const requestObj: IAxiosStruct = {
        method: 'GET',
        url: `/insight/number/query?phone_number=${data.phone_number}&country_code=${data.country_code}`,
        data,
      }

      const response = await this.useRequest(requestObj)

      return response?.data as IStatusResponse
    } catch (error) {
      return handleErrors(error)
    }
  }

  public async getHistory(data: IHistoryPayload): Promise<IHistoryResponse[]> {
    try {
      const requestObj: IAxiosStruct = {
        method: 'GET',
        url: `/sms/inbox/?message_id=${data.message_id}`,
        data,
      }

      const response = await this.useRequest(requestObj)

      return response?.data as IHistoryResponse[]
    } catch (error) {
      return handleErrors(error)
    }
  }
}
