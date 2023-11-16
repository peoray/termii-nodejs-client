import { TermiiCore } from '../../../api'
import {
  IFetchPhonebooksResponse,
  IPhonebook,
  IPhonebookResponse,
  //   IUpdatePhonebook,
  //   IUpdatePhonebookResponse,
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

  public async createPhonebook(data: IPhonebook): Promise<IPhonebookResponse> {
    try {
      const requestObj: IAxiosStruct = {
        method: 'POST',
        url: `/phonebooks`,
        data,
      }

      const response = await this.useRequest(requestObj)

      return response?.data as IPhonebookResponse
    } catch (error) {
      return handleErrors(error)
    }
  }

  public async updatePhonebook(
    phonebook_id: string,
    data: IPhonebook
  ): Promise<IPhonebookResponse> {
    try {
      const requestObj: IAxiosStruct = {
        method: 'PATCH',
        url: `/phonebooks/${phonebook_id}`,
        data,
      }

      const response = await this.useRequest(requestObj)

      return response?.data as IPhonebookResponse
    } catch (error) {
      return handleErrors(error)
    }
  }

  public async deletePhonebook(
    phonebook_id: string
  ): Promise<IPhonebookResponse> {
    try {
      const requestObj: IAxiosStruct = {
        method: 'DELETE',
        url: `/phonebooks/${phonebook_id}`,
      }

      const response = await this.useRequest(requestObj)

      return response?.data as IPhonebookResponse
    } catch (error) {
      return handleErrors(error)
    }
  }
}
