import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import {
  FilterOperator,
  FilterSuffix,
  PaginateQuery,
  Paginated,
  paginate,
} from 'nestjs-paginate';

import { CreateSteeringDto } from './dto/create-steering.dto';
import { UpdateSteeringDto } from './dto/update-steering.dto';
import { Steering } from './entities/steering.entity';

@Injectable()
export class SteeringService {
  constructor(
    @InjectRepository(Steering)
    private readonly steeringRepository: Repository<Steering>,
  ) {}

  create = async (steering: CreateSteeringDto) => {
    return await this.steeringRepository.save(steering);
  };

  findAll = async (query: PaginateQuery): Promise<Paginated<Steering>> => {
    return paginate(query, this.steeringRepository, {
      sortableColumns: ['id', 'name'],
      defaultSortBy: [['id', 'ASC']],
      searchableColumns: ['name'],
      select: ['id', 'name'],
      filterableColumns: {
        name: [FilterOperator.EQ, FilterSuffix.NOT],
      },
    });
  };

  findOne(id: number): Promise<Steering | null> {
    return this.steeringRepository.findOneBy({ id });
  }

  update(id: number, steering: UpdateSteeringDto) {
    return this.steeringRepository.update(id, steering);
  }

  remove(id: number) {
    return this.steeringRepository.delete(id);
  }
}
