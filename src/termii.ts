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
   * An instance of the MessageHandler class for sending messages.
   * @private
   * @type {MessageHandler}
   */
  private messageInstance: MessageHandler

  /**
   * Creates an instance of Termii.
   * @constructor
   * @param {string} apiKey - The API key used for authorization.
   */
  constructor(public apiKey: string) {
    // Initialize the MessageHandler instance with the API key.
    this.messageInstance = new MessageHandler(apiKey)
  }

  /**
   * Provides access to the MessageHandler instance for sending messages.
   * @type {MessageHandler}
   * @example
   * const termii = new Termii('pk_NjI3ZmVmYmU1YTY1ZWM5OWJhOWFmMGJlOjoxMjE2NzA');
   * termii.switch.sendMessage(<!-- message data -->);
   */
  public get message() {
    return this.messageInstance.message
  }
}
