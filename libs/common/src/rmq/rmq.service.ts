import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { RmqOptions, Transport } from '@nestjs/microservices';

@Injectable()
export class RmqService {
  constructor(private readonly configService: ConfigService) {}
  /**
   * @description for getting the rmq-serive options for each microservices
   * @param queue for getting the queue-id for the microservice
   * @param noAck acknowledge the message before removing
   */
  getOptions(queue: string, noAck = false): RmqOptions {
    return {
      transport: Transport.RMQ,
      options: {
        urls: [this.configService.get<string>('RABBIT_MQ_URI')],
        queue: this.configService.get<string>(`RAABIT_MQ_${queue}_QUEUE`),
        noAck,
        persistent: true,
      },
    };
  }
}
