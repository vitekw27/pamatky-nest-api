import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CitiesService } from 'src/cities.module/cities.service';
import { CitiesController } from 'src/cities.module/cities.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { City } from 'src/models/city.model';
import { CitiesModule } from 'src/cities.module/cities.module';
import { Type } from 'src/models/type.model';
import { TypesModule } from 'src/types.module/types.module';
import { PlacesModule } from 'src/places.module/places.module';
import { Place } from 'src/models/place.model';
import { CommentsModule } from 'src/comments.module/comment.module';
import { Comment } from 'src/models/comments.mode';
import { Rating } from 'src/models/rating.model';
import { RatingController } from 'src/rating.module/rating.controller';
import { RatingModule } from 'src/rating.module/rating.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'mysqlstudenti.litv.sssvt.cz',
      username: 'woloszczukvit',
      password: '123456',
      database: '4a1_woloszczukvit_db2',
      entities: [
        City,Type,Place,Comment,Rating
      ],
      synchronize: true,
    }),CitiesModule, TypesModule,PlacesModule,CommentsModule,RatingModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
