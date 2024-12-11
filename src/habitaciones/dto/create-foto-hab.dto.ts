import { IsNotEmpty, IsString, IsInt, IsOptional } from 'class-validator';

export class CreateFotoHabitacionDto {
  @IsNotEmpty()
  @IsString()
  url: string;

  @IsOptional()
  @IsString()
  descripcion?: string;

  @IsNotEmpty()
  @IsInt()
  habitacionId: number;
}
