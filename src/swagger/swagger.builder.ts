import { ConfigService } from '@nestjs/config'
import { INestApplication } from '@nestjs/common'
import { SwaggerModule, SwaggerCustomOptions, SwaggerDocumentOptions } from '@nestjs/swagger'
import { SwaggerConfig } from '@/config/swagger'

export class SwaggerBuilder {
  static make(
    app: INestApplication,
    customOptions?: SwaggerCustomOptions,
    documentOptions?: SwaggerDocumentOptions,
  ): void {
    const config = app.get(ConfigService)

    const swagger = config.get<SwaggerConfig>('swagger', {
      path: '/api',
      options: {
        openapi: '3.0.0',
        info: {
          title: 'NestJS',
          version: '1.0.0',
        },
      },
    })

    const document = SwaggerModule.createDocument(app, swagger.options, documentOptions)

    return SwaggerModule.setup(swagger.path, app, document, customOptions)
  }
}
