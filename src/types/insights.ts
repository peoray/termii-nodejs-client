export interface IGetBalanceResponse {
  user: string
  balance: number
  currency: string
}

export interface ISearchPayload {
  phone_number: string
}

export interface ISearchResponse {
  number: string
  message?: string
  status: string
  dnd_active?: boolean
  network: string
  network_code: string
}
