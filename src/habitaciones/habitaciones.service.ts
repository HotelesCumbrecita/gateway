import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { PaginationDto } from 'common/dto/pagination.dto';
import { UpdateHabitacionDto } from './dto/update-habitacion.dto';
import { CreateTipoHabitacionDto } from './dto/create-tipo-hab.dto';
import { CreateServicioHabitacionDto } from './dto/create-servicio-hab.dto';
import { CreateFotoHabitacionDto } from './dto/create-foto-hab.dto';
import { CreateHabitacionDto } from './dto/create-habitacion.dto';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class HabitacionesService {
  constructor(
    @Inject('HABITACION_SERVICE')
    private readonly habitacionServiceClient: ClientProxy,
  ) {}

  // Métodos para Habitacion
  // Metodo para crear una habitacion
  async create(createHabitacionDto: CreateHabitacionDto) {
    return await firstValueFrom(
      this.habitacionServiceClient.send(
        { cmd: 'create_habitacion' },
        createHabitacionDto,
      ),
    );
  }

  // Metodo para obtener una habitacion por su id
  async findHabitacionById(id: number) {
    return await firstValueFrom(
      this.habitacionServiceClient.send({ cmd: 'find_one_habitacion' }, id),
    );
  }

  // Metodo para obtener todas las habitaciones de un hotel
  async findAllHabitacionesByHotel(
    hotelId: number,
    paginationDto: PaginationDto,
  ) {
    return await firstValueFrom(
      this.habitacionServiceClient.send(
        { cmd: 'find_all_habitaciones_by_hotel' },
        { hotelId, paginationDto },
      ),
    );
  }

  // Metodo para actualizar una habitacion
  async update(id: number, updateHabitacionDto: UpdateHabitacionDto) {
    return await firstValueFrom(
      this.habitacionServiceClient.send(
        { cmd: 'update_habitacion' },
        { id, updateHabitacionDto },
      ),
    );
  }

  // Metodo para eliminar una habitacion
  async remove(id: number) {
    return await firstValueFrom(
      this.habitacionServiceClient.send({ cmd: 'remove_habitacion' }, id),
    );
  }

  // Métodos para TipoHabitacion
  async createTipoHabitacion(createTipoHabitacionDto: CreateTipoHabitacionDto) {
    return await firstValueFrom(
      this.habitacionServiceClient.send(
        { cmd: 'create_tipo_habitacion' },
        createTipoHabitacionDto,
      ),
    );
  }

  // Metodo para obtener todos los tipos de habitacion
  async findAllTiposHabitacion() {
    return await firstValueFrom(
      this.habitacionServiceClient.send(
        { cmd: 'find_all_tipos_habitacion' },
        {},
      ),
    );
  }

  // Metodo para eliminar un tipo de habitacion
  async removeTipoHabitacion(id: number) {
    return await firstValueFrom(
      this.habitacionServiceClient.send({ cmd: 'remove_tipo_habitacion' }, id),
    );
  }

  // Métodos para ServicioHabitacion
  async createServicioHabitacion(
    createServicioHabitacionDto: CreateServicioHabitacionDto,
  ) {
    return await firstValueFrom(
      this.habitacionServiceClient.send(
        { cmd: 'create_servicio_habitacion' },
        createServicioHabitacionDto,
      ),
    );
  }

  // Metodo para obtener todos los servicios de habitacion
  async findAllServiciosHabitacion() {
    return await firstValueFrom(
      this.habitacionServiceClient.send(
        { cmd: 'find_all_servicios_habitacion' },
        {},
      ),
    );
  }

  // Metodo para eliminar un servicio de habitacion
  async removeServicioHabitacion(id: number) {
    return await firstValueFrom(
      this.habitacionServiceClient.send(
        { cmd: 'remove_servicio_habitacion' },
        id,
      ),
    );
  }

  // Métodos para FotoHabitacion
  async createFotoHabitacion(createFotoHabitacionDto: CreateFotoHabitacionDto) {
    return await firstValueFrom(
      this.habitacionServiceClient.send(
        { cmd: 'create_foto_habitacion' },
        createFotoHabitacionDto,
      ),
    );
  }

  // Metodo para obtener todas las fotos de una habitacion
  async findAllFotosHabitacion(habitacionId: number) {
    return await firstValueFrom(
      this.habitacionServiceClient.send(
        { cmd: 'find_all_fotos_habitacion' },
        habitacionId,
      ),
    );
  }

  // Metodo para eliminar una foto de habitacion
  async removeFotoHabitacion(id: number) {
    return await firstValueFrom(
      this.habitacionServiceClient.send({ cmd: 'remove_foto_habitacion' }, id),
    );
  }
}
