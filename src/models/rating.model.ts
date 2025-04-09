import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Place } from "./place.model";

@Entity()

export class Rating{
    @PrimaryGeneratedColumn()
    id:number;
    @ManyToOne(()=> Place,place => place.rating)
    place: Place;
    @Column({name: "hodnoceni"} )
    value: number;
}