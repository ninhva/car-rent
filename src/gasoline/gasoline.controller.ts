import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { Paginate, PaginateQuery } from 'nestjs-paginate';
import { GasolineService } from './gasoline.service';
import { CreateGasolineDto } from './dto/create-gasoline.dto';
import { UpdateGasolineDto } from './dto/update-gasoline.dto';

@Controller('gasoline')
export class GasolineController {
  constructor(private readonly gasolineService: GasolineService) {}

  @Post()
  create(@Body() createGasolineDto: CreateGasolineDto) {
    return this.gasolineService.create(createGasolineDto);
  }

  @Get()
  findAll(@Paginate() query: PaginateQuery) {
    return this.gasolineService.findAll(query);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.gasolineService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateGasolineDto: UpdateGasolineDto,
  ) {
    return this.gasolineService.update(+id, updateGasolineDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.gasolineService.remove(+id);
  }
}
