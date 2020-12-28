import { Injectable } from '@nestjs/common';
import { CreateUnitDto } from './dto/create-unit.dto';
import { UnitsEntity } from './units.entity';
import { UnitsRepository } from './units.repository';

@Injectable()
export class UnitsService {
  constructor(
    private readonly unitsRepository: UnitsRepository,
  ) {}

  async create(data: CreateUnitDto): Promise<UnitsEntity> {
    return this.unitsRepository.save({ ...data });
  }
}
