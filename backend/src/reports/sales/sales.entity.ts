import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { CollectionsEntity } from '../../products/collections/collections.entity';
import { ProductTypeEntity } from '../../products/product-type/product-type.entity';

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

  @ManyToOne(() => ProductTypeEntity, productType => productType.sales)
  productType: ProductTypeEntity;

  @Column({
    type: 'integer',
    default: 1,
    nullable: false,
  })
  quantity: number;
}
