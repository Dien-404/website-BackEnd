import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // 检验数据
  app.useGlobalPipes(
    new ValidationPipe({
      // 屏蔽无效数据
      whitelist: true,
      // 配合whitelist使用 有无效数据则抛出异常
      forbidNonWhitelisted: true,
      // 将DTO转换实例类型 or 自动转换原始类型
      transform: true,
    }),
  );
  await app.listen(3000);
}
bootstrap();
