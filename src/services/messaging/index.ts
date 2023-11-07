import { Message } from './message/message'
import { SenderId } from './sender-id'

export class MessageHandler {
  private messageInstance: Message
  private senderIdInstance: SenderId

  constructor(apiKey: string) {
    this.messageInstance = new Message(apiKey)
    this.senderIdInstance = new SenderId(apiKey)
  }

  public get message() {
    return {
      sendMessage: this.messageInstance.sendMessage.bind(this.messageInstance),
      sendBulkMessage: this.messageInstance.sendBulkMessage.bind(
        this.messageInstance
      ),
      fetchSenderIDs: this.senderIdInstance.fetchSenderIDs.bind(
        this.senderIdInstance
      ),
    }
  }
}
