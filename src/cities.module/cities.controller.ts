import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { CitiesService } from './cities.service';
import { City } from 'src/models/city.model';
import { get } from 'http';
import { Place } from 'src/models/place.model';
import { PlaceDto } from 'src/models/place.dto';
import { Type } from 'src/models/type.model';
import { Comment } from 'src/models/comments.mode';
import { CommentDto } from 'src/models/comments.dto';
import { RatingDto } from 'src/models/rating.dto';
import { Rating } from 'src/models/rating.model';

@Controller()
export class CitiesController {
  constructor(private readonly citiesService: CitiesService) {}

   @Get("cities")
   public async GetAll():Promise<City[]> {
     return await this.citiesService.getAll();
   }
   @Get("cities/:id/places")
   public async GetCity(id:number):Promise<City>{
    return await this.citiesService.GetCity(id);
   }
      @Post('cities/:id/places')
    public async addPlace(
      @Param('id') cityId: number,
      @Body() placeData: Omit<PlaceDto, 'city'>
    ) {
      await this.citiesService.addPlaceToCity(cityId, placeData);
    }
  @Get("types")
  public async GetTypes():Promise<Type[]>{
    return await this.citiesService.GetTypes();
  }
    @Get('places/:id')
    public async GetPlace(@Param('id') id: string): Promise<Place> {
    return await this.citiesService.getPlace(Number(id)); // 👈 convert to number!
  }
  @Get('places/:id/comments')
public async GetComments(@Param('id') id: string): Promise<Comment[]> {
  return await this.citiesService.getComments(Number(id));
}
   
@Post('places/:id/comments')
public async addComment(
  @Param('id') id: string,
  @Body() commentData: CommentDto
): Promise<Comment> {
  return await this.citiesService.addCommentToPlace(Number(id), commentData);
}

@Get("places/:id/rating")
public async getrating(@Param('id') id: string):Promise<number>{
  return await this.citiesService.getRating(Number(id));
} 
@Post('places/:id/ratings')
public async addRating(
  @Param('id') id: string,
  @Body() ratingData: RatingDto
): Promise<Rating> {
  return await this.citiesService.addRatingToPlace(Number(id), ratingData);
}
}
