import { IsNotEmpty, IsString } from 'class-validator';

export class CreateTipoHotelDto {
  @IsNotEmpty()
  @IsString()
  nombre: string;

  @IsString()
  descripcion?: string;
}
