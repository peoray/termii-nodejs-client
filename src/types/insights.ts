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

export interface IStatusPayload {
  phone_number: string
  country_code: string
}

interface StatusResultData {
  status: number
  routeDetail: {
    number: string
    ported: number
  }
  countryDetail: {
    countryCode: string
    mobileCountryCode: string
    iso: string
  }
  operatorDetail: {
    operatorCode: string
    operatorName: string
    mobileNumberCode: string
    mobileRoutingCode: string
    carrierIdentificationCode: string
    lineType: string
  }
}
export interface IStatusResponse {
  result: StatusResultData[]
}

export interface IHistoryPayload {
  message_id?: string
}

export interface IHistoryResponse {
  sender: string
  receiver: string
  message: string
  amount: number
  reroute: number
  status: string
  sms_type: string
  send_by: string
  media_url: string | null
  message_id: string
  notify_url: string | null
  notify_id: string | null
  created_at: string
}
