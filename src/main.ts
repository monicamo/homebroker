import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AssetsService } from './assets/assets.service';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const assetsService = app.get(AssetsService);
  assetsService.subscribeNewPriceChangedEvents().subscribe((event) => {
    console.log('🚀 ~ assetsService.subscribeEvents ~ event:', event);
  });
  const configService = app.get(ConfigService);
  const port = configService.get<number>('PORT') || 3000;

  await app.listen(port);
}
bootstrap();
