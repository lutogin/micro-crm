import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { SalesEntity } from '../../reports/sales/sales.entity';

@Entity({ name: 'collections' })
export class CollectionsEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    name: 'name',
    type: 'varchar',
    length: 255,
  })
  name: string;

  @OneToMany(() => SalesEntity, sales => sales.collection)
  sales: SalesEntity;
}
