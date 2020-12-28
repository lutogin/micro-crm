import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { UserRoleEnum } from './enum/user-role.enum';
import { UnitsEntity } from './units/units.entity';

@Entity({ name: 'users' })
export class UsersEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'varchar',
    length: 255,
  })
  email: string;

  @Column({
    type: 'varchar',
    nullable: false,
    name: 'first_name',
  })
  firstName: string;

  @Column({
    type: 'varchar',
    nullable: false,
    name: 'last_name',
  })
  lastName: string;

  @Column({
    type: 'varchar',
    nullable: false,
    default: UserRoleEnum.Cashier,
  })
  role: UserRoleEnum;

  @ManyToOne(() => UnitsEntity, unit => unit.users)
  @JoinColumn({ name: 'unit_id' })
  unit: UnitsEntity;
}
