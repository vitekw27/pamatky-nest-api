import { Module } from '@nestjs/common';

import { TypeOrmModule } from "@nestjs/typeorm";

import { Type } from 'src/models/type.model';
import { TypesController } from './types.controller';
import { TypesService } from './types.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Type
  ])
  ],
  controllers: [TypesController],
  providers: [TypesService],
})
export class TypesModule {}