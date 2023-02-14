import { registerAs } from '@nestjs/config'

export interface AppConfig {
  readonly env: string
  readonly host: string
  readonly port: number
}

export const appConfig = registerAs('app', (): AppConfig => {
  return {
    env: String(process.env.NODE_ENV ?? 'development'),
    host: String(process.env.APP_HOST ?? '127.0.0.1'),
    port: Number(process.env.APP_PORT ?? 3000),
  }
})
