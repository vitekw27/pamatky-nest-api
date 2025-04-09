import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Place } from "./place.model";

@Entity()
export class Type{
    @PrimaryGeneratedColumn()
    public id:number;
    @Column({name: 'typ'})
    public type:string;
    
    @OneToMany(()=> Place,place => place.type)
    public places:Place[]

    constructor(id:number,type:string) {
        this.id = id,
        this.type = type
        
    }
}