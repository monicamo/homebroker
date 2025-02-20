import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Order, OrderStatus } from './entities/order.entity';
import { Model } from 'mongoose';
import { Asset } from 'src/assets/entities/asset.entity';

@Injectable()
export class OrdersService {
  constructor(@InjectModel(Order.name) private OrderSchema: Model<Order>) {}

  create(createOrderDto: CreateOrderDto) {
    return this.OrderSchema.create({
      wallet: createOrderDto.walletId,
      asset: createOrderDto.assetId,
      shares: createOrderDto.shares,
      partial: createOrderDto.shares,
      price: createOrderDto.price,
      type: createOrderDto.type,
      status: OrderStatus.PENDING,
    });
  }

  findAll(filter: { walletId: string }) {
    return this.OrderSchema.find({ wallet: filter.walletId }).populate(
      'asset',
    ) as Promise<(Order & { asset: Asset })[]>;
  }

  findOne(id: string) {
    return this.OrderSchema.findById(id);
  }

  update(id: number, updateOrderDto: UpdateOrderDto) {
    return `This action updates a #${id} order`;
  }

  remove(id: number) {
    return `This action removes a #${id} order`;
  }
}
