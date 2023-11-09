import { Message } from './message/message'
import { SenderId } from './sender-id'

/**
 * The MessageHandler class handles message-related functionalities by providing access to message and sender ID instances.
 */
export class MessageHandler {
  private messageInstance: Message // Instance to handle sending messages
  private senderIdInstance: SenderId // Instance to handle sender IDs

  /**
   * Constructs a MessageHandler instance.
   * @constructor
   * @param {string} apiKey - The API key used for authorization.
   */
  constructor(apiKey: string) {
    // Initialize the message and sender ID instances with the provided API key.
    this.messageInstance = new Message(apiKey)
    this.senderIdInstance = new SenderId(apiKey)
  }

  /**
   * Provides access to message-related methods.
   * @type {Object}
   * @property {Function} sendMessage - Sends a single message.
   * @property {Function} sendBulkMessage - Sends messages in bulk.
   * @property {Function} fetchSenderIDs - Retrieves sender IDs.
   * @property {Function} requestSenderID - Requests a sender ID.
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
    }
  }
}
