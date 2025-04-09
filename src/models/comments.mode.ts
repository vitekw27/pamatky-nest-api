import { Column, Entity, ManyToOne, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Place } from "./place.model";

@Entity()
export class Comment{
    @PrimaryGeneratedColumn()
    public id: number;
    @Column({name: 'text'})
    
    public text:string;
    @Column({name: 'author'})

    public author:string;
    @Column({name: 'created'})

    public created:Date;
    @ManyToOne(()=> Place,place => place.comments)
    public place:Place;
}