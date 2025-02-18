import { Asset } from './entities/asset.entity';
import { Injectable } from '@nestjs/common';
import { CreateAssetDto } from './dto/create-asset.dto';
import { UpdateAssetDto } from './dto/update-asset.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class AssetsService {
  constructor(@InjectModel(Asset.name) private AssetSchema: Model<Asset>) {}

  create(createAssetDto: CreateAssetDto) {
    return this.AssetSchema.create(createAssetDto);
  }

  findAll() {
    return this.AssetSchema.find();
  }

  findOne(symbol: string) {
    return this.AssetSchema.findOne({ symbol });
  }

  update(id: number, updateAssetDto: UpdateAssetDto) {
    return `This action updates a #${id} asset`;
  }

  remove(id: number) {
    return `This action removes a #${id} asset`;
  }
}
