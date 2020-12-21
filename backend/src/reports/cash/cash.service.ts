import { Injectable } from '@nestjs/common';
import { CashEntity } from './cash.entity';
import { CashRepository } from './cash.repository';
import { GetCacheByDateDto } from './dto/get-cache-by-date.dto';
import { SetCacheDto } from './dto/set-cache.dto';
import * as moment from 'moment';

@Injectable()
export class CashService {
  constructor(
    private readonly cashRepository: CashRepository
  ) {}

  async setCash(cashData: SetCacheDto): Promise<void> {
    await this.cashRepository.insert(cashData);

    return;
  }

  getCashFromDate(params: GetCacheByDateDto): Promise<CashEntity> {
    return this.cashRepository.findOne(params);
  }

  getCashForCurrentDay(): Promise<CashEntity | undefined> {
    return this.cashRepository.findOne({ date: moment().format("DD.MM.YYYY") });
  }
}
