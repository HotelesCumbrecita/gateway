import { IsNotEmpty, IsString, IsInt } from 'class-validator';

export class CreateFotoHotelDto {
  @IsNotEmpty()
  @IsString()
  url: string;

  @IsString()
  descripcion?: string;

  @IsNotEmpty()
  @IsInt()
  hotelId: number;
}
