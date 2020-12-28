import { EntityRepository, Repository } from 'typeorm';
import { UnitsEntity } from './units.entity';

@EntityRepository(UnitsEntity)
export class UnitsRepository extends Repository<UnitsEntity> {

}
