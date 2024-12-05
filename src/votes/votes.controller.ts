import { Body, Controller, Get, NotFoundException, Post } from '@nestjs/common';
import { VotesService } from './votes.service';
import { CreateVoteDto } from './dto/votes.dto';

@Controller('votes')
export class VotesController {
  constructor(private readonly votesService: VotesService) {}

  @Post('/vote')
  async registerVote(@Body() createVoteDto: CreateVoteDto) {
    const vote = this.votesService.registerVote(createVoteDto);
    if (!vote) {
      throw new NotFoundException('vote not created');
    }
    return vote;
  }

  @Get('/results')
  async getResults() {
    return this.votesService.getResults();
  }
}
