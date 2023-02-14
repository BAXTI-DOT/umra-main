import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { PrismaModule } from './prisma/prisma.module'
import { config } from './config'
import { OrderModule } from './module/order/order.module';

@Module({
  imports: [
    ConfigModule.forRoot(config),
    PrismaModule,
    OrderModule,
  ],
})
export class AppModule {}
