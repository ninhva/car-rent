import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GasolineService } from './gasoline.service';
import { GasolineController } from './gasoline.controller';
import { Gasoline } from './entities/gasoline.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Gasoline])],
  exports: [TypeOrmModule],
  controllers: [GasolineController],
  providers: [GasolineService],
})
export class GasolineModule {}
