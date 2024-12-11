import {
  IsNotEmpty,
  IsString,
  IsEmail,
  IsMobilePhone,
  IsOptional,
  IsInt,
  IsArray,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { CreateServicioHotelDto } from './create-servicio-hotel.dto';
import { CreateFotoHotelDto } from './create-foto-hotel.dto';

export class CreateHotelDto {
  @IsNotEmpty()
  @IsString()
  nombre: string;

  @IsNotEmpty()
  @IsString()
  descripcionCorta: string;

  @IsNotEmpty()
  @IsString()
  descripcionLarga: string;

  @IsNotEmpty()
  @IsInt()
  tipoHotelId: number;

  @IsNotEmpty()
  @IsString()
  cuit: string;

  @IsNotEmpty()
  @IsString()
  responsable: string;

  @IsNotEmpty()
  @IsMobilePhone('es-AR')
  telefono: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  direccion: string;

  @IsNotEmpty()
  @IsString()
  documentoInscripcion: string;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateFotoHotelDto)
  fotos?: CreateFotoHotelDto[];

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateServicioHotelDto)
  serviciosGenerales?: CreateServicioHotelDto[];
}
