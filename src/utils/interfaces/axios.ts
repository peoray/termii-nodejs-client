export interface IAxiosStruct {
  method: 'GET' | 'POST' | 'PATCH' | 'DELETE'
  url: string
  data?: any
  page?: number
}
