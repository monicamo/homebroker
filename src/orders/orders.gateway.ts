import { OrderType } from './entities/order.entity';
import { OrdersService } from './orders.service';
import { SubscribeMessage, WebSocketGateway } from '@nestjs/websockets';

@WebSocketGateway({ cors: true })
export class OrdersGateway {
  constructor(private ordersService: OrdersService) {}

  @SubscribeMessage('orders/create')
  async handleMessage(
    client: any,
    payload: {
      assetId: string;
      walletId: string;
      type: OrderType;
      shares: number;
      price: number;
      partial: number;
    },
  ) {
    const order = await this.ordersService.create({
      assetId: payload.assetId,
      walletId: payload.walletId,
      type: payload.type,
      shares: payload.shares,
      price: payload.price,
      partial: payload.partial,
    });
    return order;
  }
}
