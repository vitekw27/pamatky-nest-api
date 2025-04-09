import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { City } from 'src/models/city.model';
import { CityDto } from 'src/models/city.dto';
import { Place } from 'src/models/place.model';
import { PlaceDto } from 'src/models/place.dto';
import { Type } from 'src/models/type.model';
import { Comment } from 'src/models/comments.mode';
import { CommentDto } from 'src/models/comments.dto';
import { Rating } from 'src/models/rating.model';
import { RatingDto } from 'src/models/rating.dto';

@Injectable()
export class CitiesService {
  /**
   *
   */
  constructor(
    @InjectRepository(City)
        private cityRepository: Repository<City>,
    @InjectRepository(Place)
        private placeRepository: Repository<Place>,
    @InjectRepository(Type)
        private typeRepository:Repository<Type>,
    @InjectRepository(Comment)
        private commentRepository:Repository<Comment>,
    @InjectRepository(Rating)
        private ratingRepository:Repository<Rating>
  ) {
   
    
  }
  public async getAll(): Promise<City[]> {
    return await this.cityRepository.find({
      relations: ['places','places.Type'],  
    });
  }
  
  public async GetCity(id:number):Promise<City>{
    return await this.cityRepository.findOne({
      where: { id: 1 },
      relations: ['places','places.Type'],
    });
  }
  

  public async addPlaceToCity(
    cityId: number,
    placeData: Omit<PlaceDto, 'city'>
  ) {
    const city = await this.cityRepository.findOne({
      where: { id: cityId },
    });
  
    if (!city) {
      throw new Error(`City with ID ${cityId} not found`);
    }
  
          // 👇 Create the new Type entity based on the string name from DTO
          const newType = this.typeRepository.create({ type: placeData.type });
      const savedType = await this.typeRepository.save(newType);

      const placeToCreate = {
        name: placeData.name,
        city,
        type: newType,
        description: placeData.description
        
      };

      const newPlace = this.placeRepository.create(placeToCreate);
     await this.placeRepository.save(newPlace);
  }
  public async GetTypes():Promise<Type[]>{
    return await this.typeRepository.find();
  }
  public async getPlace(id: number): Promise<Place> {
    return await this.placeRepository.findOne({
      where: { id },
      relations: ['city', 'type'],
    });
  }
  public async getComments(id: number): Promise<Comment[]> {
    const place = await this.placeRepository.findOne({
      where: { id },
      relations: ['comments'],
    });
  
    return place?.comments ?? [];
  }
  public async addCommentToPlace(placeId: number, commentData: CommentDto): Promise<Comment> {
    const place = await this.placeRepository.findOne({ where: { id: placeId } });
  
    if (!place) {
      throw new Error(`Place with ID ${placeId} not found`);
    }
  
    const newComment = this.commentRepository.create({
      ...commentData,
      place,
    });
  
    return await this.commentRepository.save(newComment);
  }
  public async getRating(id: number): Promise<number> {
    const place = await this.placeRepository.findOne({
      where: { id },
      relations: ['rating'], // 👈 Make sure we fetch related ratings
    });
  
    if (!place || !place.rating || place.rating.length === 0) {
      return 0; // No ratings available
    }
  
    const sum = place.rating.reduce((total, rating) => total + rating.value, 0);
    return sum / place.rating.length;
  }
  public async addRatingToPlace(placeId: number, ratingData: RatingDto): Promise<Rating> {
    const place = await this.placeRepository.findOne({ where: { id: placeId } });
  
    if (!place) {
      throw new Error(`Place with ID ${placeId} not found`);
    }
  
    const newRating = this.ratingRepository.create({
      value: ratingData.value,
      place,
    });
  
    return await this.ratingRepository.save(newRating);
  }
}
