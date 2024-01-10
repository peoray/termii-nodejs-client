import { TermiiCore } from '../../../api'
import {
  ICreateContact,
  ICreateContactResponse,
  IDeleteContactResponse,
  IFetchContactsResponse,
} from '../../../types'
import { IAxiosStruct, handleErrors } from '../../../utils'

/**
 * Represents the Contact class, extending TermiiCore, to interact with the Termii API for contact-related functionalities.
 * @extends TermiiCore
 */
export class Contact extends TermiiCore {
  /**
   * Creates an instance of Contact.
   * @constructor
   * @param {string} apiKey - The API key used for authorization.
   */
  constructor(apiKey: string) {
    super(apiKey)
  }

  /**
   * Fetches the contacts for a specific phonebook.
   * @param {string} phonebook_id - The ID of the phonebook to fetch contacts from.
   * @param {number} [page] - The page number for paginated results (optional).
   * @returns {Promise<IFetchContactsResponse>} A promise that resolves with the list of contacts or rejects with an error.
   */
  public async fetchContacts(
    phonebook_id: string,
    page?: number
  ): Promise<IFetchContactsResponse> {
    try {
      const requestObj: IAxiosStruct = {
        method: 'GET',
        url: `/phonebooks/${phonebook_id}/contacts?page=${page}`,
      }

      const response = await this.useRequest(requestObj)

      return response?.data as IFetchContactsResponse
    } catch (error) {
      return handleErrors(error)
    }
  }

  /**
   * Creates a new contact in a specific phonebook.
   * @param {string} phonebook_id - The ID of the phonebook to add the contact to.
   * @param {ICreateContact} data - The payload containing the necessary information for creating the contact.
   * @returns {Promise<ICreateContactResponse>} A promise that resolves with the response from creating the contact or rejects with an error.
   */
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

  /**
   * Deletes a contact from the phonebook.
   * @param {string} contact_id - The ID of the contact to delete.
   * @returns {Promise<IDeleteContactResponse>} A promise that resolves with the response from deleting the contact or rejects with an error.
   */
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
