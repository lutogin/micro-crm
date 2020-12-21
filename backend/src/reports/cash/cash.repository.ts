import { EntityRepository, Repository } from 'typeorm';
import { CashEntity } from './cash.entity';

@EntityRepository(CashEntity)
export class CashRepository extends Repository<CashEntity> {

}
