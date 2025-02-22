import { Module } from '@nestjs/common';
import { AssetsService } from './assets.service';
import { AssetsController } from './assets.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Asset, AssetSchema } from './entities/asset.entity';
import { AssetsGateway } from './assets.gateway';
import { AssetDaily, AssetDailySchema } from './entities/asset-daily.entity';
import { AssetsDailiesController } from './asset-dailies.controller';
import { AssetDailiesService } from './asset-dalies.service';

@Module({
  controllers: [AssetsController, AssetsDailiesController],
  imports: [
    MongooseModule.forFeature([
      { name: Asset.name, schema: AssetSchema },
      { name: AssetDaily.name, schema: AssetDailySchema },
    ]),
  ],
  providers: [AssetsService, AssetsGateway, AssetDailiesService],
})
export class AssetsModule {}
