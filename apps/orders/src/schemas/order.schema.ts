import { Schema, SchemaFactory } from '@nestjs/mongoose';
import { AbstractDocument } from '@app/common';
import { Prop } from '@nestjs/mongoose';

@Schema({ versionKey: false }) // setting version-key to false for not dealing with versioning for the schema
export class Order extends AbstractDocument {
  @Prop()
  name: string;

  @Prop()
  price: number;

  @Prop()
  phoneNumber: number;
}

export const OrderSchema = SchemaFactory.createForClass(Order);
