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
import { CreateGasolineDto } from './dto/create-gasoline.dto';
import { UpdateGasolineDto } from './dto/update-gasoline.dto';
import { Gasoline } from './entities/gasoline.entity';

@Injectable()
export class GasolineService {
  constructor(
    @InjectRepository(Gasoline)
    private readonly gasolineRepository: Repository<Gasoline>,
  ) {}

  create = async (gasoline: CreateGasolineDto) => {
    return await this.gasolineRepository.save(gasoline);
  };

  findAll = async (query: PaginateQuery): Promise<Paginated<Gasoline>> => {
    return paginate(query, this.gasolineRepository, {
      sortableColumns: ['id', 'name'],
      defaultSortBy: [['id', 'ASC']],
      searchableColumns: ['name'],
      select: ['id', 'name'],
      filterableColumns: {
        name: [FilterOperator.EQ, FilterSuffix.NOT],
      },
    });
  };

  findOne(id: number): Promise<Gasoline | null> {
    return this.gasolineRepository.findOneBy({ id });
  }

  update(id: number, gasoline: UpdateGasolineDto) {
    return this.gasolineRepository.update(id, gasoline);
  }

  remove(id: number) {
    return this.gasolineRepository.delete(id);
  }
}
