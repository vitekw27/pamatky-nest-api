import { Module } from '@nestjs/common';
import { CitiesController } from './cities.controller';
import { CitiesService } from './cities.service';
import { TypeOrmModule } from "@nestjs/typeorm";
import { City } from 'src/models/city.model';
import { PlaceService } from 'src/places.module/places.service';
import { Place } from 'src/models/place.model';
import { TypesService } from 'src/types.module/types.service';
import { Type } from 'src/models/type.model';
import { Comment } from 'src/models/comments.mode';
import { CommentService } from 'src/comments.module/comments.service';
import { Rating } from 'src/models/rating.model';
import { RatingService } from 'src/rating.module/rating.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      City,Place,Type,Comment,Rating
  ])
  ],
  controllers: [CitiesController],
  providers: [CitiesService,PlaceService,TypesService,CommentService,RatingService],
})
export class CitiesModule {}
