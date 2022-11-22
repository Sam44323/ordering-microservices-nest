import { Body, Controller, Post } from '@nestjs/common';
import { CreateOrderRequest } from './dto/create-order.request';
import { OrdersService } from './orders.service';

@Controller()
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post('/orders')
  async createOrder(@Body() order: CreateOrderRequest) {
    return this.ordersService.createOrder(order);
  }
}
