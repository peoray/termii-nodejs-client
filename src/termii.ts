import { Message } from './services'

/**
 * The Termii class is the main class that is used to access the other classes
 * @class Termii
 * @param {string} apiKey - The api key to authorize usage
 * @returns The Termii class
 * @example
 * const termii = new Termii('pk_NjI3ZmVmYmU1YTY1ZWM5OWJhOWFmMGJlOjoxMjE2NzA);
 **/
export class Termii {
  private messageInstance: Message

  constructor(public apiKey: string) {
    this.messageInstance = new Message(apiKey)
  }

  public get switch() {
    return {
      sendMessage: this.messageInstance.sendMessage.bind(this.messageInstance),
      sendBulkMessage: this.messageInstance.sendBulkMessage.bind(
        this.messageInstance
      ),
    }
  }
}
