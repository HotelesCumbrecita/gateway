import { IsNotEmpty, IsString, IsInt } from 'class-validator';

export class CreateServicioHabitacionDto {
  @IsNotEmpty()
  @IsString()
  nombre: string;

  @IsNotEmpty()
  @IsString()
  descripcion: string;

  @IsNotEmpty()
  @IsInt()
  habitacionId: number;
}
