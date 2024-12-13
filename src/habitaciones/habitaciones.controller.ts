import {
  Controller,
  Get,
  Param,
  Post,
  Put,
  Delete,
  Body,
  Query,
  ParseIntPipe,
} from '@nestjs/common';
import { HabitacionesService } from './habitaciones.service';

import { PaginationDto } from 'common/dto/pagination.dto';
import { CreateHabitacionDto } from './dto/create-habitacion.dto';
import { UpdateHabitacionDto } from './dto/update-habitacion.dto';
import { CreateTipoHabitacionDto } from './dto/create-tipo-hab.dto';
import { CreateServicioHabitacionDto } from './dto/create-servicio-hab.dto';
import { CreateFotoHabitacionDto } from './dto/create-foto-hab.dto';

@Controller('habitaciones')
export class HabitacionesController {
  constructor(private readonly habitacionesService: HabitacionesService) {}

  @Post()
  async create(@Body() createHabitacionDto: CreateHabitacionDto) {
    return this.habitacionesService.create(createHabitacionDto);
  }

  @Get(':id')
  async findHabitacionById(@Param('id', ParseIntPipe) id: number) {
    return this.habitacionesService.findHabitacionById(id);
  }

  @Get()
  async findAllHabitacionesByHotel(
    @Query('hotelId', ParseIntPipe) hotelId: number,
    @Query() paginationDto: PaginationDto,
  ) {
    return this.habitacionesService.findAllHabitacionesByHotel(
      hotelId,
      paginationDto,
    );
  }

  @Put(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateHabitacionDto: UpdateHabitacionDto,
  ) {
    return this.habitacionesService.update(id, updateHabitacionDto);
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number) {
    return this.habitacionesService.remove(id);
  }

  // Endpoints para TipoHabitacion
  @Post('tipos')
  async createTipoHabitacion(
    @Body() createTipoHabitacionDto: CreateTipoHabitacionDto,
  ) {
    return this.habitacionesService.createTipoHabitacion(
      createTipoHabitacionDto,
    );
  }

  @Get('tipos')
  async findAllTiposHabitacion() {
    return this.habitacionesService.findAllTiposHabitacion();
  }

  @Delete('tipos/:id')
  async removeTipoHabitacion(@Param('id', ParseIntPipe) id: number) {
    return this.habitacionesService.removeTipoHabitacion(id);
  }

  // Método para obtener habitaciones por tipo de habitación
  @Get('tipos/:tipoHabitacionId/habitaciones')
  async findAllHabitacionesByTipoHabitacion(
    @Param('tipoHabitacionId', ParseIntPipe) tipoHabitacionId: number,
    @Query() paginationDto: PaginationDto,
  ) {
    return this.habitacionesService.findAllHabitacionesByTipoHabitacion(
      tipoHabitacionId,
      paginationDto,
    );
  }

  // Endpoints para ServicioHabitacion
  @Post('servicios')
  async createServicioHabitacion(
    @Body() createServicioHabitacionDto: CreateServicioHabitacionDto,
  ) {
    return this.habitacionesService.createServicioHabitacion(
      createServicioHabitacionDto,
    );
  }

  @Get('servicios')
  async findAllServiciosHabitacion() {
    return this.habitacionesService.findAllServiciosHabitacion();
  }

  @Delete('servicios/:id')
  async removeServicioHabitacion(@Param('id', ParseIntPipe) id: number) {
    return this.habitacionesService.removeServicioHabitacion(id);
  }

  // Método para obtener habitaciones por servicio específico
  @Get('servicios/:servicioId/habitaciones')
  async findAllHabitacionesByServicio(
    @Param('servicioId', ParseIntPipe) servicioId: number,
    @Query() paginationDto: PaginationDto,
  ) {
    return this.habitacionesService.findAllHabitacionesByServicio(
      servicioId,
      paginationDto,
    );
  }

  // Endpoints para FotoHabitacion
  @Post('fotos')
  async createFotoHabitacion(
    @Body() createFotoHabitacionDto: CreateFotoHabitacionDto,
  ) {
    return this.habitacionesService.createFotoHabitacion(
      createFotoHabitacionDto,
    );
  }

  @Get(':habitacionId/fotos')
  async findAllFotosHabitacion(
    @Param('habitacionId', ParseIntPipe) habitacionId: number,
  ) {
    return this.habitacionesService.findAllFotosHabitacion(habitacionId);
  }

  @Delete('fotos/:id')
  async removeFotoHabitacion(@Param('id', ParseIntPipe) id: number) {
    return this.habitacionesService.removeFotoHabitacion(id);
  }

  // Método para calcular el precio de una habitación
  @Get(':habitacionId/precio')
  async calcularPrecio(
    @Param('habitacionId', ParseIntPipe) habitacionId: number,
    @Query('fechaInicio') fechaInicio: string,
    @Query('fechaFin') fechaFin: string,
  ) {
    return this.habitacionesService.calcularPrecio(
      habitacionId,
      fechaInicio,
      fechaFin,
    );
  }
}
