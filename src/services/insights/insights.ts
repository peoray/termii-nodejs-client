import { TermiiCore } from '../../api'
import { IGetBalanceResponse } from '../../types'
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
}
