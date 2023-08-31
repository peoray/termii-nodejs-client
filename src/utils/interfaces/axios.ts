export interface IAxiosStruct {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE'
  url: string
  data?: any
}
