import { registerAs } from '@nestjs/config'
import { OpenAPIObject } from '@nestjs/swagger'

export interface SwaggerConfig {
  readonly path: string
  readonly options: Omit<OpenAPIObject, 'paths'>
}

export const swaggerConfig = registerAs('swagger', (): SwaggerConfig => {
  return {
    path: String(process.env.SWAGGER_PATH ?? '/api'),
    options: {
      openapi: '3.0.0',
      info: {
        title: 'Umra',
        version: '0.0.0',
        description: 'API Documentation',
      },
    },
  }
})
