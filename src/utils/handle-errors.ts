import { AxiosError } from 'axios'

export const handleErrors = (error: any) => {
  return error?.response?.data
}

export const handleAxiosError = (error: AxiosError) => {
  return error.message
}
