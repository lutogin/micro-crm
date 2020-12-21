import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { CollectionsEntity } from '../../products/collections/collections.entity';
import { ProductTypesEntity } from '../../products/product-types/product-types.entity';

@Entity({ name: 'sales' })
export class SalesEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'varchar',
    nullable: false,
    length: 255,
  })
  part_number: string;

  @ManyToOne(() => CollectionsEntity, collection => collection.sales)
  collection: CollectionsEntity;

  @ManyToOne(() => ProductTypesEntity, productType => productType.sales)
  productType: ProductTypesEntity;

  @Column({
    type: 'number',
    default: 1,
    nullable: false,
  })
  quantity: number;
}
