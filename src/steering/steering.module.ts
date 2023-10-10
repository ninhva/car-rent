import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SteeringService } from './steering.service';
import { SteeringController } from './steering.controller';
import { Steering } from './entities/steering.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Steering])],
  exports: [TypeOrmModule],
  controllers: [SteeringController],
  providers: [SteeringService],
})
export class SteeringModule {}
