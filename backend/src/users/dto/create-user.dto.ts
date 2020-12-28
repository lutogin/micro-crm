import { UserRoleEnum } from '../enum/user-role.enum';

export interface CreateUserDto {
  email: string;
  firstName: string;
  lastName: string;
  role?: UserRoleEnum;
  unitId: string;
}
