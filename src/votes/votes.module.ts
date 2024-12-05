import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { VotesService } from './votes.service';
import { VotesController } from './votes.controller';
import { Vote, VoteSchema } from './entities/votes.entity';

@Module({
  imports: [MongooseModule.forFeature([{ name: Vote.name, schema: VoteSchema }])],
  controllers: [VotesController],
  providers: [VotesService],
})
export class VotesModule {}
