import { Module } from '@nestjs/common';
import { HotelesService } from './hoteles.service';
import { HotelesController } from './hoteles.controller';
import { NatsModule } from 'src/transports/nats.module';

@Module({
  imports: [NatsModule],
  controllers: [HotelesController],
  providers: [HotelesService],
})
export class HotelesModule {}
