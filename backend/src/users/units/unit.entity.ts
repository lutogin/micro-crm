import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { UsersEntity } from '../users.entity';

@Entity({ name: 'units' })
export class UnitEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'varchar',
    length: 255,
    nullable: false,
  })
  title: string;

  @OneToMany(() => UsersEntity, user => user.unit)
  users: UsersEntity[];
}
