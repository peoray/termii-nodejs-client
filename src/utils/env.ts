import * as path from 'path'
import { config } from 'dotenv'

// Parsing the env file from the root directory of the project
config({ path: path.join(__dirname, '../../.env') })

interface ENV {
  API_KEY: string | undefined
}

interface Config {
  API_KEY: string
}

const getConfig = (): ENV => {
  return {
    API_KEY: process.env.API_KEY,
  }
}

const getSanitzedConfig = (configSys: ENV): Config => {
  for (const [key, value] of Object.entries(configSys)) {
    if (value === undefined) {
      throw new Error(`Missing key ${key} in .env`)
    }
  }
  return configSys as Config
}

const configSys = getConfig()

const sanitizedConfig = getSanitzedConfig(configSys)

export const keys = [sanitizedConfig.API_KEY]
