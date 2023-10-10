import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {
  FilterOperator,
  FilterSuffix,
  PaginateQuery,
  Paginated,
  paginate,
} from 'nestjs-paginate';
import { CreateCityDto } from './dto/create-city.dto';
import { UpdateCityDto } from './dto/update-city.dto';
import { City } from './entities/city.entity';

@Injectable()
export class CitiesService {
  constructor(
    @InjectRepository(City)
    private readonly cityRepository: Repository<City>,
  ) {}

  create = async (city: CreateCityDto) => {
    return await this.cityRepository.save(city);
  };

  findAll = async (query: PaginateQuery): Promise<Paginated<City>> => {
    return paginate(query, this.cityRepository, {
      sortableColumns: ['id', 'name'],
      defaultSortBy: [['id', 'ASC']],
      searchableColumns: ['name'],
      select: ['id', 'name'],
      filterableColumns: {
        name: [FilterOperator.EQ, FilterSuffix.NOT],
      },
    });
  };

  findOne(id: number): Promise<City | null> {
    return this.cityRepository.findOneBy({ id });
  }

  update(id: number, city: UpdateCityDto) {
    return this.cityRepository.update(id, city);
  }

  remove(id: number) {
    return this.cityRepository.delete(id);
  }
}
