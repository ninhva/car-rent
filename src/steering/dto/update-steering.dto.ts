import { PartialType } from '@nestjs/swagger';
import { CreateSteeringDto } from './create-steering.dto';

export class UpdateSteeringDto extends PartialType(CreateSteeringDto) {}
