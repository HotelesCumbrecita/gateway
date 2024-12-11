import { IsOptional, IsString } from 'class-validator';

export class UpdateTipoHabitacionDto {
  @IsOptional()
  @IsString()
  nombre?: string;

  @IsOptional()
  @IsString()
  descripcion?: string;
}
