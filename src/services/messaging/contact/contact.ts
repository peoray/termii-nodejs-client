import { TermiiCore } from '../../../api'
import {
  ICreateContact,
  ICreateContactResponse,
  IDeleteContactResponse,
  IFetchContactsResponse,
} from '../../../types'
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

  public async createContact(
    phonebook_id: string,
    data: ICreateContact
  ): Promise<ICreateContactResponse> {
    try {
      const requestObj: IAxiosStruct = {
        method: 'POST',
        url: `/phonebooks/${phonebook_id}/contacts`,
        data,
      }

      const response = await this.useRequest(requestObj)

      return response?.data as ICreateContactResponse
    } catch (error) {
      return handleErrors(error)
    }
  }

  public async deleteContact(
    contact_id: string
  ): Promise<IDeleteContactResponse> {
    try {
      const requestObj: IAxiosStruct = {
        method: 'DELETE',
        url: `/phonebook/contact/${contact_id}`,
      }

      const response = await this.useRequest(requestObj)

      return response?.data as IDeleteContactResponse
    } catch (error) {
      return handleErrors(error)
    }
  }
}
