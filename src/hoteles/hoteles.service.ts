import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

import { PaginationDto } from 'common/dto/pagination.dto';
import { firstValueFrom } from 'rxjs';
import { CreateHotelDto } from './dto/create-hotel.dto';
import { UpdateHotelDto } from './dto/update-hotel.dto';
import { CreateServicioHotelDto } from './dto/create-servicio-hotel.dto';
import { CreateFotoHotelDto } from './dto/create-foto-hotel.dto';
import { CreateTipoHotelDto } from './dto/create-tipo-hotel.dto';

@Injectable()
export class HotelesService {
  constructor(
    @Inject('HOTEL_SERVICE') private readonly hotelServiceClient: ClientProxy,
  ) {}

  async create(createHotelDto: CreateHotelDto) {
    return firstValueFrom(
      this.hotelServiceClient.send({ cmd: 'create_hotel' }, createHotelDto),
    );
  }

  async findHotelById(id: number) {
    return firstValueFrom(
      this.hotelServiceClient.send({ cmd: 'find_one_hotel' }, id),
    );
  }

  async findAllHotels(paginationDto: PaginationDto) {
    return firstValueFrom(
      this.hotelServiceClient.send({ cmd: 'find_all_hotels' }, paginationDto),
    );
  }

  async findAllHotelsWithAvailability(
    fecha: Date,
    paginationDto: PaginationDto,
  ) {
    return firstValueFrom(
      this.hotelServiceClient.send(
        { cmd: 'find_all_hotels_with_availability' },
        { fecha, paginationDto },
      ),
    );
  }

  async findHotelsByCapacity(capacidad: number, paginationDto: PaginationDto) {
    return firstValueFrom(
      this.hotelServiceClient.send(
        { cmd: 'find_all_hotels_by_capacity' },
        { capacidad, paginationDto },
      ),
    );
  }

  async update(id: number, updateHotelDto: UpdateHotelDto) {
    return firstValueFrom(
      this.hotelServiceClient.send(
        { cmd: 'update_hotel' },
        { id, updateHotelDto },
      ),
    );
  }

  async remove(id: number) {
    return firstValueFrom(
      this.hotelServiceClient.send({ cmd: 'remove_hotel' }, id),
    );
  }

  // Métodos para servicios de hotel
  async createServicioHotel(createServicioHotelDto: CreateServicioHotelDto) {
    return firstValueFrom(
      this.hotelServiceClient.send(
        { cmd: 'create_servicio_hotel' },
        createServicioHotelDto,
      ),
    );
  }

  async findAllServiciosHotel() {
    return firstValueFrom(
      this.hotelServiceClient.send({ cmd: 'find_all_servicios_hotel' }, {}),
    );
  }

  async removeServicioHotel(id: number) {
    return firstValueFrom(
      this.hotelServiceClient.send({ cmd: 'remove_servicio_hotel' }, { id }),
    );
  }

  // Métodos para fotos de hotel
  async createFotoHotel(createFotoHotelDto: CreateFotoHotelDto) {
    return firstValueFrom(
      this.hotelServiceClient.send(
        { cmd: 'create_foto_hotel' },
        createFotoHotelDto,
      ),
    );
  }

  async findAllFotosHotel(hotelId: number) {
    return firstValueFrom(
      this.hotelServiceClient.send(
        { cmd: 'find_all_fotos_hotel' },
        { hotelId },
      ),
    );
  }

  async removeFotoHotel(id: number) {
    return firstValueFrom(
      this.hotelServiceClient.send({ cmd: 'remove_foto_hotel' }, { id }),
    );
  }

  // Métodos para tipos de hotel
  async createTipoHotel(createTipoHotelDto: CreateTipoHotelDto) {
    return firstValueFrom(
      this.hotelServiceClient.send(
        { cmd: 'create_tipo_hotel' },
        createTipoHotelDto,
      ),
    );
  }

  async findAllTiposHotel() {
    return firstValueFrom(
      this.hotelServiceClient.send({ cmd: 'find_all_tipos_hotel' }, {}),
    );
  }

  async removeTipoHotel(id: number) {
    return firstValueFrom(
      this.hotelServiceClient.send({ cmd: 'remove_tipo_hotel' }, { id }),
    );
  }
}
