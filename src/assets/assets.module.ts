import { Module } from '@nestjs/common';
import { AssetsService } from './assets.service';
import { AssetsController } from './assets.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Asset, AssetSchema } from './entities/asset.entity';
import { AssetsGateway } from './assets.gateway';

@Module({
  controllers: [AssetsController],
  imports: [
    MongooseModule.forFeature([{ name: Asset.name, schema: AssetSchema }]),
  ],
  providers: [AssetsService, AssetsGateway],
})
export class AssetsModule {}
