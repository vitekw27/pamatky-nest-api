import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Place } from "./place.model";

@Entity()
export class City{
    @PrimaryGeneratedColumn()
    public id:number;
    @Column({name: 'nazev'})
    public name:string;

    @OneToMany(() => Place,place => place.type)
    public places:Place[];
    constructor(id:number,name:string) {
        this.id = id,
        this.name = name
        
    }
}