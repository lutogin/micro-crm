import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UnitsRepository } from './units/units.repository';
import { UsersRepository } from './users.repository';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { UnitsService } from './units/units.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      UsersRepository,
      UnitsRepository,
    ]),
  ],
  providers: [UsersService, UnitsService],
  controllers: [UsersController],
  exports: [
    UsersService,
  ],
})
export class UsersModule {}
