import { User } from "./User";

export class DanceGroup {
  id: number;
  name: string;
  primaryMentor: User;
  secondaryMentor?: User;
}
