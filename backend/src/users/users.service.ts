import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserRoleEnum } from './enum/user-role.enum';
import { UnitsEntity } from './units/units.entity';
import { UnitsRepository } from './units/units.repository';
import { UsersEntity } from './users.entity';
import { UsersRepository } from './users.repository';

@Injectable()
export class UsersService {
  constructor(
    private readonly usersRepository: UsersRepository,
    private readonly unitsRepository: UnitsRepository,
  ) {}

  async create(data: CreateUserDto): Promise<UsersEntity> {
    const unit: UnitsEntity = await this.unitsRepository.findOne({ id: data.unitId });

    return this.usersRepository.save({
      email: data.email,
      firstName: data.firstName,
      lastName: data.lastName,
      role: data.role || UserRoleEnum.Cashier,
      unit,
    });
  }
}
