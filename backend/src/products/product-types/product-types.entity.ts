import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { SalesEntity } from '../../reports/sales/sales.entity';

@Entity({ name: 'product-types' })
export class ProductTypesEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    name: 'name',
    type: 'varchar',
    length: 255,
  })
  type: string;

  @OneToMany(() => SalesEntity, salesEntity => salesEntity.productType)
  sales: SalesEntity;
}
