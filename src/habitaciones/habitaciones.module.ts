import { Module } from '@nestjs/common';
import { HabitacionesController } from './habitaciones.controller';
import { NatsModule } from 'src/transports/nats.module';
import { HabitacionesService } from './habitaciones.service';

@Module({
  controllers: [HabitacionesController],
  providers: [HabitacionesService],
  imports: [NatsModule],
})
export class HabitacionesModule {}
