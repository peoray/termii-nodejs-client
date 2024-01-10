import { TermiiCore } from '../../../api'
import {
  IFetchPhonebooksResponse,
  IPhonebook,
  IPhonebookResponse,
} from '../../../types'
import { IAxiosStruct, handleErrors } from '../../../utils'

/**
 * Represents the Phonebook class, extending TermiiCore, to interact with the Termii API for phonebook-related functionalities.
 * @extends TermiiCore
 */
export class Phonebook extends TermiiCore {
  /**
   * Creates an instance of Phonebook.
   * @constructor
   * @param {string} apiKey - The API key used for authorization.
   */
  constructor(apiKey: string) {
    super(apiKey)
  }

  /**
   * Fetches a list of phonebooks.
   * @param {number} [page] - The page number for paginated results (optional).
   * @returns {Promise<IFetchPhonebooksResponse>} A promise that resolves with the list of phonebooks or rejects with an error.
   */
  public async fetchPhonebooks(
    page?: number
  ): Promise<IFetchPhonebooksResponse> {
    try {
      const requestObj: IAxiosStruct = {
        method: 'GET',
        url: `/phonebooks?page=${page}`,
      }

      const response = await this.useRequest(requestObj)

      return response?.data as IFetchPhonebooksResponse
    } catch (error) {
      return handleErrors(error)
    }
  }

  /**
   * Creates a new phonebook.
   * @param {IPhonebook} data - The payload containing the necessary information for creating the phonebook.
   * @returns {Promise<IPhonebookResponse>} A promise that resolves with the response from creating the phonebook or rejects with an error.
   */
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

  /**
   * Updates an existing phonebook.
   * @param {string} phonebook_id - The ID of the phonebook to update.
   * @param {IPhonebook} data - The payload containing the necessary information for updating the phonebook.
   * @returns {Promise<IPhonebookResponse>} A promise that resolves with the response from updating the phonebook or rejects with an error.
   */
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

  /**
   * Deletes a phonebook.
   * @param {string} phonebook_id - The ID of the phonebook to delete.
   * @returns {Promise<IPhonebookResponse>} A promise that resolves with the response from deleting the phonebook or rejects with an error.
   */
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
