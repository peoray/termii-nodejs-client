import { Message } from './services'

/**
 * The Fincra class is the main class that is used to access the other classes
 * @class Fincra
 * @param {string} publicKey - The public key of the merchant
 * @param {string} privateKey - The private key of the merchant
 * @param {IEnvironment} environment - The environment to use
 * @returns The Fincra class
 * @example
 * const fincra = new Fincra('pk_NjI3ZmVmYmU1YTY1ZWM5OWJhOWFmMGJlOjoxMjE2NzA=', 'hzjMvDeY0dmBrDPSxZH5exnmdNc0aUXy', {sandbox: true});
 **/
export class Termii {
  constructor(public apiKey: string) {
    this.apiKey = apiKey
  }
  public message = new Message(this.apiKey)
}
