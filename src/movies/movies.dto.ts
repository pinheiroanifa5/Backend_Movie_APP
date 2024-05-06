import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateMovieDto{

    @IsString()
    @IsNotEmpty()
    directorName:string;

    @IsString()
    @IsNotEmpty()
    movieName:string;

    @IsNumber()
    @IsNotEmpty()
    yearReleased:number;

    @IsString()
    @IsNotEmpty()
    image: string;
}

export class MovieDto{

    directorName:string;

    movieName:string;

    yearReleased:number;

    image: string;
}