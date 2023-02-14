import { NestFactory } from '@nestjs/core'
import { ConfigService } from '@nestjs/config'
import { CustomValidationPipe } from './pipe/custom-validation.pipe'
import { SwaggerBuilder } from './swagger/swagger.builder'
import { PrismaService } from './prisma/prisma.service'
import { AppModule } from './app.module'

const bootstrap = async (): Promise<void> => {
  const app = await NestFactory.create(AppModule)

  app.useGlobalPipes(new CustomValidationPipe())

  SwaggerBuilder.make(app)

  const config = app.get(ConfigService)
  const prisma = app.get(PrismaService)

  prisma.enableShutdownHooks(app)

  const host = config.getOrThrow<string>('app.host')
  const port = config.getOrThrow<number>('app.port')

  await app.listen(3001, host)
}

setImmediate(bootstrap)

