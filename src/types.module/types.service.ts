import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Type } from "src/models/type.model";
import { Repository } from "typeorm";

@Injectable()
export class TypesService{
    /**
     *
     */
    constructor(
        @InjectRepository(Type)
                private typesRepository: Repository<Type>
    ) {
        
        
    }

    public async getAll() : Promise<Type[]>{
        return await this.typesRepository.find();
    }
    public async PostType(type:Type){
        this.typesRepository.create(type);
    }
}