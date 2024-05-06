import {
    IsNumber,
    IsOptional,
    IsString,
  } from 'class-validator';
  
  export class EditMovieDto {
    @IsString()
    @IsOptional()
    directorName:string;

    @IsString()
    @IsOptional()
    movieName:string;

    @IsNumber()
    @IsOptional()
    yearReleased:number;

    @IsString()
    @IsOptional()
    image: string;
  }