import { MessageHandler } from './services'

/**
 * The Termii class is the main class used to access the other classes in the Termii library.
 * @class Termii
 * @param {string} apiKey - The API key used for authorization.
 * @returns An instance of the Termii class.
 * @example
 * const termii = new Termii('pk_NjI3ZmVmYmU1YTY1ZWM5OWJhOWFmMGJlOjoxMjE2NzA);
 **/
export class Termii {
  /**
   * An instance of the Message class for sending messages.
   * @private
   * @type {Message}
   */
  private messageInstance: MessageHandler

  constructor(public apiKey: string) {
    // Initialize the Message instance with the API key.
    this.messageInstance = new MessageHandler(apiKey)
  }

  /**
   * Provides access to methods related to sending messages.
   * @type {Object}
   * @property {Function} sendMessage - Sends a single message.
   * @property {Function} sendBulkMessage - Sends messages in bulk.
   * @example
   * const termii = new Termii('pk_NjI3ZmVmYmU1YTY1ZWM5OWJhOWFmMGJlOjoxMjE2NzA');
   * termii.switch.sendMessage(<!-- message data -->);
   */
  public get message() {
    return this.messageInstance.message
  }
}
