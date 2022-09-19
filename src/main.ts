import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //NestJs 애플리케이션 생성/서버 가동, 실행
  await app.listen(3000);
}
bootstrap();
