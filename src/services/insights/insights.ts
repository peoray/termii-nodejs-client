import { TermiiCore } from '../../api'
import {
  IGetBalanceResponse,
  ISearchPayload,
  ISearchResponse,
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

      console.log(response)

      return response?.data as ISearchResponse
    } catch (error) {
      return handleErrors(error)
    }
  }
}
