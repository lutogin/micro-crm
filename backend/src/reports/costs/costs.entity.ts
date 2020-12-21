import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'costs' })
export class CostsEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'date',
    name: 'date',
    nullable: false,
  })
  date: string;

  @Column({
    type: 'varchar',
    length: 255,
  })
  type: string;

  @Column({
    type: 'varchar',
    length: 1000,
  })
  descriptions: string;
}
