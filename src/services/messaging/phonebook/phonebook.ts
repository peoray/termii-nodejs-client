import { TermiiCore } from '../../../api'
import {
  IFetchPhonebooksResponse,
  ICreatePhonebook,
  ICreatePhonebookResponse,
} from '../../../types'
import { IAxiosStruct, handleErrors } from '../../../utils'

export class Phonebook extends TermiiCore {
  constructor(apiKey: string) {
    super(apiKey)
  }

  public async fetchPhonebooks(
    page?: number
  ): Promise<IFetchPhonebooksResponse> {
    try {
      const requestObj: IAxiosStruct = {
        method: 'GET',
        url: `/phonebooks`,
        page,
      }

      const response = await this.useRequest(requestObj)

      return response?.data as IFetchPhonebooksResponse
    } catch (error) {
      return handleErrors(error)
    }
  }

  public async createPhonebook(
    data: ICreatePhonebook
  ): Promise<ICreatePhonebookResponse> {
    try {
      const requestObj: IAxiosStruct = {
        method: 'POST',
        url: `/phonebooks`,
        data,
      }

      const response = await this.useRequest(requestObj)

      return response?.data as ICreatePhonebookResponse
    } catch (error) {
      return handleErrors(error)
    }
  }
}
