import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypesModule } from './types/types.module';
import { Type } from './types/entities/type.entity';
import { CapacityModule } from './capacity/capacity.module';
import { Capacity } from './capacity/entities/capacity.entity';
import { SteeringModule } from './steering/steering.module';
import { Steering } from './steering/entities/steering.entity';
import { CitiesModule } from './cities/cities.module';
import { City } from './cities/entities/city.entity';
import { GasolineModule } from './gasoline/gasoline.module';
import { Gasoline } from './gasoline/entities/gasoline.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'morent',
      entities: [Type, Capacity, Steering, City, Gasoline],
      synchronize: true,
    }),
    TypesModule,
    CapacityModule,
    SteeringModule,
    CitiesModule,
    GasolineModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
