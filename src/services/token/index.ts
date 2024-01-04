import { Token } from './token'

export class TokenHandler {
  private tokenInstance: Token

  constructor(apiKey: string) {
    this.tokenInstance = new Token(apiKey)
  }

  public get token() {
    return {
      sendToken: this.tokenInstance.sendToken.bind(this.tokenInstance),
      sendVoiceToken: this.tokenInstance.sendVoiceToken.bind(
        this.tokenInstance
      ),
      makeVoiceCall: this.tokenInstance.makeVoiceCall.bind(this.tokenInstance),
    }
  }
}
