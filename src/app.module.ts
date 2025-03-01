import { Module } from '@nestjs/common';;
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { VotesModule } from './votes/votes.module';

@Module({
  imports: [
    AuthModule,
    VotesModule,
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_URI, {
      dbName: process.env.MONGO_DB_NAME
    })
  ],
  controllers: [],
  providers: [],
})

export class AppModule {
  
}
