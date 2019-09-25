import { BehaviorSubject } from 'rxjs';

export class LessonService {
  groupId = new BehaviorSubject<number>(1);
}
