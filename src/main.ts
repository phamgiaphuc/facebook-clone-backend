import { AppModule } from '@/app.module';
import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    cors: true,
  });
  const configService = app.get(ConfigService);
  const port = configService.get<number>('port');
  await app.listen(port);
  Logger.log(
    `Application is running on: ${(await app.getUrl()).replace('[::1]', 'localhost')}`,
  );
}
bootstrap();
