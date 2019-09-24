import { User } from './User';

export class DanceGroup {
  groupId: number;
  groupDirection: string;
  primaryMentor: User;
  secondaryMentor?: User;
  groupLevel: string;
}
