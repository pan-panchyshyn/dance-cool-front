import { Time } from '@angular/common';
import { User } from '../User';

export class AuthenticatedUser {
  accessToken: string;
  tokenLifeTime: Time;
  authenticatedUser: User;
}
