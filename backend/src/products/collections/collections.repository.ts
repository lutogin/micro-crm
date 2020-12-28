import { EntityRepository, Repository } from 'typeorm';
import { CollectionsEntity } from './collections.entity';

@EntityRepository(CollectionsEntity)
export class CollectionsRepository extends Repository<CollectionsEntity> {

}
