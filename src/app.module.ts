import { Module } from '@nestjs/common';

import { HotelesModule } from './hoteles/hoteles.module';
import { HabitacionesModule } from './habitaciones/habitaciones.module';
import { NatsModule } from './transports/nats.module';

@Module({
  imports: [HotelesModule, HabitacionesModule, NatsModule],
})
export class AppModule {}
