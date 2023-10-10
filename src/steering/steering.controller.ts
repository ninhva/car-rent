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
import { SteeringService } from './steering.service';
import { CreateSteeringDto } from './dto/create-steering.dto';
import { UpdateSteeringDto } from './dto/update-steering.dto';

@Controller('steering')
export class SteeringController {
  constructor(private readonly steeringService: SteeringService) {}

  @Post()
  create(@Body() createSteeringDto: CreateSteeringDto) {
    return this.steeringService.create(createSteeringDto);
  }

  @Get()
  findAll(@Paginate() query: PaginateQuery) {
    return this.steeringService.findAll(query);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.steeringService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateSteeringDto: UpdateSteeringDto,
  ) {
    return this.steeringService.update(+id, updateSteeringDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.steeringService.remove(+id);
  }
}
