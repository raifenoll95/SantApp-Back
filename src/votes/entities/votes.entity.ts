import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Vote {

  _id?: string;

  @Prop({ required: true, unique: true })
  correo: string;

  @Prop({ required: true, enum: ['A', 'B'] })
  equipo: string;

  @Prop({ default: Date.now })
  timestamp: Date;
}

export const VoteSchema = SchemaFactory.createForClass(Vote);
