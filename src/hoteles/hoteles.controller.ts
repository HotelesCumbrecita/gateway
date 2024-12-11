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
import { HotelesService } from './hoteles.service';

import { PaginationDto } from 'common/dto/pagination.dto';
import { CreateHotelDto } from './dto/create-hotel.dto';
import { UpdateHotelDto } from './dto/update-hotel.dto';
import { CreateServicioHotelDto } from './dto/create-servicio-hotel.dto';
import { CreateFotoHotelDto } from './dto/create-foto-hotel.dto';
import { CreateTipoHotelDto } from './dto/create-tipo-hotel.dto';

@Controller('hoteles')
export class HotelesController {
  constructor(private readonly hotelesService: HotelesService) {}

  @Post()
  async create(@Body() createHotelDto: CreateHotelDto) {
    return await this.hotelesService.create(createHotelDto);
  }

  @Get(':id')
  async findHotelById(@Param('id', ParseIntPipe) id: number) {
    return await this.hotelesService.findHotelById(id);
  }

  @Get()
  async findAllHotels(@Query() paginationDto: PaginationDto) {
    return await this.hotelesService.findAllHotels(paginationDto);
  }

  @Get('availability')
  async findAllHotelsWithAvailability(
    @Query('fecha') fecha: Date,
    @Query() paginationDto: PaginationDto,
  ) {
    return this.hotelesService.findAllHotelsWithAvailability(
      fecha,
      paginationDto,
    );
  }

  @Get('capacity')
  async findHotelsByCapacity(
    @Query('capacidad', ParseIntPipe) capacidad: number,
    @Query() paginationDto: PaginationDto,
  ) {
    return this.hotelesService.findHotelsByCapacity(capacidad, paginationDto);
  }

  @Put(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateHotelDto: UpdateHotelDto,
  ) {
    return await this.hotelesService.update(id, updateHotelDto);
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number) {
    return await this.hotelesService.remove(id);
  }

  // Endpoints para servicios de hotel
  @Post('servicios')
  async createServicioHotel(
    @Body() createServicioHotelDto: CreateServicioHotelDto,
  ) {
    return await this.hotelesService.createServicioHotel(
      createServicioHotelDto,
    );
  }

  @Get('servicios')
  async findAllServiciosHotel() {
    return await this.hotelesService.findAllServiciosHotel();
  }

  @Delete('servicios/:id')
  async removeServicioHotel(@Param('id', ParseIntPipe) id: number) {
    return await this.hotelesService.removeServicioHotel(id);
  }

  // Endpoints para fotos de hotel
  @Post('fotos')
  async createFotoHotel(@Body() createFotoHotelDto: CreateFotoHotelDto) {
    return await this.hotelesService.createFotoHotel(createFotoHotelDto);
  }

  @Get(':hotelId/fotos')
  async findAllFotosHotel(@Param('hotelId', ParseIntPipe) hotelId: number) {
    return await this.hotelesService.findAllFotosHotel(hotelId);
  }

  @Delete('fotos/:id')
  async removeFotoHotel(@Param('id', ParseIntPipe) id: number) {
    return await this.hotelesService.removeFotoHotel(id);
  }

  // Endpoints para tipos de hotel
  @Post('tipos')
  async createTipoHotel(@Body() createTipoHotelDto: CreateTipoHotelDto) {
    return await this.hotelesService.createTipoHotel(createTipoHotelDto);
  }

  @Get('tipos')
  async findAllTiposHotel() {
    return await this.hotelesService.findAllTiposHotel();
  }

  @Delete('tipos/:id')
  async removeTipoHotel(@Param('id', ParseIntPipe) id: number) {
    return await this.hotelesService.removeTipoHotel(id);
  }
}
