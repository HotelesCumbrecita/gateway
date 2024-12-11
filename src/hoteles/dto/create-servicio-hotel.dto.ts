import { IsNotEmpty, IsString, IsInt } from 'class-validator';

export class CreateServicioHotelDto {
  @IsNotEmpty()
  @IsString()
  nombre: string;

  @IsString()
  descripcion?: string;

  @IsNotEmpty()
  @IsInt()
  hotelId: number;
}
