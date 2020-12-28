import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'cash' })
export class CashEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'date',
    nullable: false,
  })
  date: string;

  @Column({
    type: 'integer',
    nullable: false,
  })
  cash: number;
}
