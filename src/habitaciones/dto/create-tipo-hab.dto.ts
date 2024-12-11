import { IsNotEmpty, IsString } from 'class-validator';

export class CreateTipoHabitacionDto {
  @IsNotEmpty()
  @IsString()
  nombre: string;

  @IsNotEmpty()
  @IsString()
  descripcion: string;
}
