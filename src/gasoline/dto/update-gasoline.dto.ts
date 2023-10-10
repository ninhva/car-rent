import { PartialType } from '@nestjs/swagger';
import { CreateGasolineDto } from './create-gasoline.dto';

export class UpdateGasolineDto extends PartialType(CreateGasolineDto) {}
