import { Module } from '@nestjs/common';

import { TypeOrmModule } from "@nestjs/typeorm";
import { City } from 'src/models/city.model';
import { Place } from 'src/models/place.model';

import { TypesService } from 'src/types.module/types.service';
import { Type } from 'src/models/type.model';
import { RatingController } from './rating.controller';
import { RatingService } from './rating.service';
import { Rating } from 'src/models/rating.model';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Rating
  ])
  ],
  controllers: [RatingController],
  providers: [RatingService],
})
export class RatingModule {}