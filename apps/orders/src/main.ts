import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { OrdersModule } from './orders.module';
import { RmqService } from '@app/common';

async function bootstrap() {
  const app = await NestFactory.create(OrdersModule);
  app.useGlobalPipes(new ValidationPipe()); // using a pipe for class-transformers
  const rmqService = app.get<RmqService>(RmqService);
  app.connectMicroservice(rmqService.getOptions('BILLING'));
  const configService = app.get(ConfigService);
  await app.listen(configService.get('PORT'));
}
bootstrap();
