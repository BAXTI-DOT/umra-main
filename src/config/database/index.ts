import { registerAs } from '@nestjs/config'

export interface DatabaseConfig {
  readonly url: string
}

export const databaseConfig = registerAs('database', (): DatabaseConfig => {
  return {
    url: String(process.env.DATABASE_URL ?? 'postgresql://postgres:postgres@127.0.0.1:5433/umra'),
  }
})
