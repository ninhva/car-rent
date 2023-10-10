import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CapacityService } from './capacity.service';
import { CapacityController } from './capacity.controller';
import { Capacity } from './entities/capacity.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Capacity])],
  exports: [TypeOrmModule],
  controllers: [CapacityController],
  providers: [CapacityService],
})
export class CapacityModule {}
