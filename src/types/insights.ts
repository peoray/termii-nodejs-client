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

export interface IStautsPayload {
  phone_number: string
  country_code: string
}

interface ResultData {
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
  result: ResultData[]
}
