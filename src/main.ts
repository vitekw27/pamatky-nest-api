
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: true,       // 👈 Dynamically reflect the request origin
    credentials: true   // 👈 Only if you're using cookies or auth headers
  });

  await app.listen(3000);
}
bootstrap();