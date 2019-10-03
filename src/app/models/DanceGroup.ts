import { User } from './User';
import { DanceDirection } from './DanceDirection';
import { SkillLevel } from './SkillLevel';

export class DanceGroup {
  groupId: number;
  groupDirection: DanceDirection;
  groupLevel: SkillLevel;
  primaryMentor: User;
  secondaryMentor?: User;
}
