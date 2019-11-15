import { User } from '../User';

export class AuthenticatedUser {
  accessToken: string;
  tokenLifeTime: number;
  authenticatedUser: User;
}
