import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true, // strips out extra fields...
    forbidNonWhitelisted: true, // throws an error on extra fields
    transform: true
  }));
  await app.listen(3000);
}
bootstrap();
