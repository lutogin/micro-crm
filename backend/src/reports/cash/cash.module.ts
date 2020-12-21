import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CashRepository } from './cash.repository';
import { CashService } from './cash.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      CashRepository,
    ]),
  ],
  providers: [CashService],
  exports: [CashService],
})
export class CashModule {}
