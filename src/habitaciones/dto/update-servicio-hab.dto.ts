import { IsOptional, IsString } from 'class-validator';

export class UpdateServicioHabitacionDto {
  @IsOptional()
  @IsString()
  nombre?: string;

  @IsOptional()
  @IsString()
  descripcion?: string;
}
