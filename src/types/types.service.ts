import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import {
  FilterOperator,
  FilterSuffix,
  PaginateQuery,
  paginate,
  Paginated,
} from 'nestjs-paginate';

import { CreateTypeDto } from './dto/create-type.dto';
import { UpdateTypeDto } from './dto/update-type.dto';
import { Type } from './entities/type.entity';

@Injectable()
export class TypesService {
  constructor(
    @InjectRepository(Type)
    private readonly typeRepository: Repository<Type>,
  ) {}

  create = async (type: CreateTypeDto) => {
    return await this.typeRepository.save(type);
  };

  findAll = async (query: PaginateQuery): Promise<Paginated<Type>> => {
    return paginate(query, this.typeRepository, {
      sortableColumns: ['id', 'name'],
      defaultSortBy: [['id', 'ASC']],
      searchableColumns: ['name'],
      select: ['id', 'name'],
      filterableColumns: {
        name: [FilterOperator.EQ, FilterSuffix.NOT],
      },
    });
  };

  findOne(id: number): Promise<Type | null> {
    return this.typeRepository.findOneBy({ id });
  }

  update(id: number, type: UpdateTypeDto) {
    return this.typeRepository.update(id, type);
  }

  remove(id: number) {
    return this.typeRepository.delete(id);
  }
}
