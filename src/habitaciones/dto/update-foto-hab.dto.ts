import { IsOptional, IsString } from 'class-validator';

export class UpdateFotoHabitacionDto {
  @IsOptional()
  @IsString()
  url?: string;

  @IsOptional()
  @IsString()
  descripcion?: string;
}
