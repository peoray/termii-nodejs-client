import { MessageHandler, TokenHandler, InsightsHandler } from './services'

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
   * An instance of the TokenHandler class for handling tokens.
   * @private
   * @type {TokenHandler}
   */
  private tokenInstance: TokenHandler
  /**
   * An instance of the InsightsHandler class for handling insights.
   * @private
   * @type {InsightsHandler}
   */
  private insightsInstance: InsightsHandler

  /**
   * Creates an instance of Termii.
   * @constructor
   * @param {string} apiKey - The API key used for authorization.
   */
  constructor(public apiKey: string) {
    // Initialize the MessageHandler, TokenHandler, and InsightsHandler instances with the API key.
    this.messageInstance = new MessageHandler(apiKey)
    this.tokenInstance = new TokenHandler(apiKey)
    this.insightsInstance = new InsightsHandler(apiKey)
  }

  /**
   * Provides access to the MessageHandler instance.
   * @type {MessageHandler}
   * @example
   * const termii = new Termii('pk_NjI3ZmVmYmU1YTY1ZWM5OWJhOWFmMGJlOjoxMjE2NzA');
   * termii.switch.sendMessage(<!-- message data -->);
   */
  public get message() {
    return this.messageInstance.message
  }
  /**
   * Provides access to the TokenHandler instance.
   * @type {TokenHandler}
   * @example
   * const termii = new Termii('pk_NjI3ZmVmYmU1YTY1ZWM5OWJhOWFmMGJlOjoxMjE2NzA');
   * termii.token.verifyToken(<!-- token data -->);
   */
  public get token() {
    return this.tokenInstance.token
  }
  /**
   * Provides access to the InsightsHandler instance.
   * @type {InsightsHandler}
   * @example
   * const termii = new Termii('pk_NjI3ZmVmYmU1YTY1ZWM5OWJhOWFmMGJlOjoxMjE2NzA');
   * termii.insights.getHistory(<!-- insights data -->);
   */
  public get insights() {
    return this.insightsInstance.insights
  }
}
