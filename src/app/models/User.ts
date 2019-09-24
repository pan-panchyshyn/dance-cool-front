import { Role } from './Role';

export class User {
  id: number;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  role?: Role;
}
