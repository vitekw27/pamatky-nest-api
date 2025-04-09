import { Module } from '@nestjs/common';

import { TypeOrmModule } from "@nestjs/typeorm";
import { City } from 'src/models/city.model';
import { Place } from 'src/models/place.model';
import { PlacesController } from './places.controller';
import { PlaceService } from './places.service';
import { TypesService } from 'src/types.module/types.service';
import { Type } from 'src/models/type.model';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Place,Type
  ])
  ],
  controllers: [PlacesController],
  providers: [PlaceService,TypesService],
})
export class PlacesModule {}
