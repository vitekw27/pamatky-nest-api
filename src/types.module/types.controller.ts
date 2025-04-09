import { Controller, Get } from "@nestjs/common";
import { TypesService } from "./types.service";
import { Type } from "src/models/type.model";

@Controller("types")
export class TypesController{
    constructor(private readonly typesService: TypesService) {}

    @Get()
    public async getAll(): Promise<Type[]>{
        return await this.typesService.getAll();
    }



}