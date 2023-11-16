import { Message } from './message/message'
import { SenderId } from './sender-id'
import { Number } from './number/number'
import { Template } from './template/template'
import { Phonebook } from './phonebook/phonebook'

/**
 * The MessageHandler class handles message-related functionalities by providing access to message and sender ID instances.
 */
export class MessageHandler {
  private messageInstance: Message // Instance to handle sending messages
  private senderIdInstance: SenderId // Instance to handle sender IDs
  private numberInstance: Number // Instance to handle sending message with auto generated number
  private templateInstance: Template // Instance to handle sending message with template
  private phonebookInstance: Phonebook // Instance to manage phonebooks

  /**
   * Constructs a MessageHandler instance.
   * @constructor
   * @param {string} apiKey - The API key used for authorization.
   */
  constructor(apiKey: string) {
    // Initialize the message and sender ID instances with the provided API key.
    this.messageInstance = new Message(apiKey)
    this.senderIdInstance = new SenderId(apiKey)
    this.numberInstance = new Number(apiKey)
    this.templateInstance = new Template(apiKey)
    this.phonebookInstance = new Phonebook(apiKey)
  }

  /**
   * Provides access to message-related methods.
   * @type {Object}
   * @property {Function} sendMessage - Sends a single message.
   * @property {Function} sendBulkMessage - Sends messages in bulk.
   * @property {Function} fetchSenderIDs - Retrieves sender IDs.
   * @property {Function} requestSenderID - Requests a sender ID.
   * @property {Function} sendMessageWithNumber - Sends a message with autogenerated number ID.
   * @property {Function} sendMessageWithTemplate - Sends a message with template.
   * @returns {Object} - Object containing methods related to messages and sender IDs.
   */
  public get message() {
    return {
      // Method to send a single message
      sendMessage: this.messageInstance.sendMessage.bind(this.messageInstance),
      // Method to send messages in bulk
      sendBulkMessage: this.messageInstance.sendBulkMessage.bind(
        this.messageInstance
      ),
      // Method to fetch sender IDs
      fetchSenderIDs: this.senderIdInstance.fetchSenderIDs.bind(
        this.senderIdInstance
      ),
      // Method to request a sender ID
      requestSenderID: this.senderIdInstance.requestSenderID.bind(
        this.senderIdInstance
      ),
      // Method to send a message with autogenerated number
      sendMessageWithNumber: this.numberInstance.sendMessageWithNumber.bind(
        this.numberInstance
      ),
      // Method to send a message with template
      sendMessageWithTemplate: this.templateInstance.sendMessageWithTemplate.bind(
        this.templateInstance
      ),
      // Method to fetch phonebooks
      fetchPhonebooks: this.phonebookInstance.fetchPhonebooks.bind(
        this.phonebookInstance
      ),
      // Method to create phonebook
      createPhonebook: this.phonebookInstance.createPhonebook.bind(
        this.phonebookInstance
      ),
      // Method to update phonebook
      updatePhonebook: this.phonebookInstance.updatePhonebook.bind(
        this.phonebookInstance
      ),
    }
  }
}
