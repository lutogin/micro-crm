import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
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
    name: 'part_number',
  })
  partNumber: string;

  @ManyToOne(() => CollectionsEntity, collection => collection.sales)
  @JoinColumn({ name: 'collection_id' })
  collection: CollectionsEntity;

  @ManyToOne(() => ProductTypeEntity, productType => productType.sales)
  @JoinColumn({ name: 'product_type_id' })
  productType: ProductTypeEntity;

  @Column({
    type: 'integer',
    default: 1,
    nullable: false,
  })
  quantity: number;
}
