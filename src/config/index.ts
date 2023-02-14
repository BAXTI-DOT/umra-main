import { ConfigModuleOptions } from '@nestjs/config'
import { appConfig } from './app'
import { swaggerConfig } from './swagger'
import { databaseConfig } from './database'

export const config: ConfigModuleOptions = {
  load: [appConfig, swaggerConfig, databaseConfig],
  cache: true,
  isGlobal: true,
}
