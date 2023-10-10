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

import { CreateCapacityDto } from './dto/create-capacity.dto';
import { UpdateCapacityDto } from './dto/update-capacity.dto';
import { Capacity } from './entities/capacity.entity';

@Injectable()
export class CapacityService {
  constructor(
    @InjectRepository(Capacity)
    private readonly capacityRepository: Repository<Capacity>,
  ) {}

  create = async (capacity: CreateCapacityDto) => {
    return await this.capacityRepository.save(capacity);
  };

  findAll = async (query: PaginateQuery): Promise<Paginated<Capacity>> => {
    return paginate(query, this.capacityRepository, {
      sortableColumns: ['id', 'name'],
      defaultSortBy: [['id', 'ASC']],
      searchableColumns: ['name'],
      select: ['id', 'name'],
      filterableColumns: {
        name: [FilterOperator.EQ, FilterSuffix.NOT],
      },
    });
  };

  findOne(id: number): Promise<Capacity | null> {
    return this.capacityRepository.findOneBy({ id });
  }

  update(id: number, capacity: UpdateCapacityDto) {
    return this.capacityRepository.update(id, capacity);
  }

  remove(id: number) {
    return this.capacityRepository.delete(id);
  }
}
