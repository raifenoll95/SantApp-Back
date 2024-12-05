import { Injectable, ConflictException, NotFoundException, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Vote } from './entities/votes.entity';
import { CreateVoteDto } from './dto/votes.dto';

@Injectable()
export class VotesService {

  constructor(@InjectModel(Vote.name) private voteModel: Model<Vote>) {}

  async registerVote(createVoteDto: CreateVoteDto): Promise<Vote> {
    try {
        const vote = createVoteDto;
        const newVote = new this.voteModel(vote);
  
        await newVote.save();
        return newVote.toJSON();
      } 
      catch(error)
      {
        throw new InternalServerErrorException('Something terrible happen!!!');
      }
  }

  //Me dvuelve el recuento de votos
  async getResults() {
    const totalVotes = await this.voteModel.countDocuments();
    const votesA = await this.voteModel.countDocuments({ equipo: 'A' });
    const votesB = await this.voteModel.countDocuments({ equipo: 'B' });

    const percentageA = totalVotes > 0 ? ((votesA / totalVotes) * 100).toFixed(2) : 0;
    const percentageB = totalVotes > 0 ? ((votesB / totalVotes) * 100).toFixed(2) : 0;

    return {
      totalVotes,
      equipoA: { votos: votesA, porcentaje: percentageA },
      equipoB: { votos: votesB, porcentaje: percentageB },
    };
  }
}
