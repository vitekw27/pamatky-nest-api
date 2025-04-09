import { Module } from '@nestjs/common';

import { TypeOrmModule } from "@nestjs/typeorm";
import { City } from 'src/models/city.model';
import { PlaceService } from 'src/places.module/places.service';
import { Place } from 'src/models/place.model';
import { TypesService } from 'src/types.module/types.service';
import { Type } from 'src/models/type.model';
import { CommentService } from './comments.service';
import { Comment } from 'src/models/comments.mode';
import { CommentsController } from './comments.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Comment
  ])
  ],
  controllers: [CommentsController],
  providers: [CommentService],
})
export class CommentsModule {}