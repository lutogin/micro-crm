import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { UserRoleEnum } from './enum/user-role.enum';
import { UnitEntity } from './units/unit.entity';

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
  })
  firstName: string;

  @Column({
    type: 'varchar',
    nullable: false,
  })
  lastName: string;

  @Column({
    type: 'varchar',
    nullable: false,
    default: UserRoleEnum.Cashier,
  })
  role: UserRoleEnum;

  @ManyToOne(() => UnitEntity, unit => unit.users)
  unit: UnitEntity;
}
