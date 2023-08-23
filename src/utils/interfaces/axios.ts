import { ISendBulkMessage, ISendMessage } from '../../types'

export interface IAxiosStruct {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE'
  url: string
  data?: ISendMessage | ISendBulkMessage
}
