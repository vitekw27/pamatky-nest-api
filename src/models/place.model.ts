import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { City } from "./city.model";
import { Comment } from "./comments.mode";
import { Type } from "./type.model";
import { Rating } from "./rating.model";


@Entity()
export class Place{
    @PrimaryGeneratedColumn()
    public id : number;
    @Column({name: 'nazev',default: ""})
    public name : string;
    @Column({name:'description'})
    public description : string;
    @ManyToOne(()=> City,city=> city.places)
    public city : City;
    @ManyToOne(()=> Type,type => type.places)
    @JoinColumn({ name: 'typeId' }) 
    public type : Type;
    
    @OneToMany(()=> Rating,rating =>rating.place)
    public rating: Rating[];
    @OneToMany(()=> Comment,comment => comment.place)
    public comments: Comment[]

}