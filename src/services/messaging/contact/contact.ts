import { TermiiCore } from '../../../api'
import { IFetchContactsResponse } from '../../../types'
import { IAxiosStruct, handleErrors } from '../../../utils'

export class Contact extends TermiiCore {
  constructor(apiKey: string) {
    super(apiKey)
  }

  public async fetchContacts(
    phonebook_id: string,
    page?: number
  ): Promise<IFetchContactsResponse> {
    try {
      const requestObj: IAxiosStruct = {
        method: 'GET',
        url: `/phonebooks/${phonebook_id}/contacts`,
        page,
      }

      const response = await this.useRequest(requestObj)

      return response?.data as IFetchContactsResponse
    } catch (error) {
      return handleErrors(error)
    }
  }
}
