import { Injectable } from '@angular/core';

import { Subject, ReplaySubject, BehaviorSubject } from 'rxjs';
import { AttendanceModule } from '../attendance.module';

@Injectable({
  providedIn: AttendanceModule
})
export class LessonService {
  groupId = new BehaviorSubject<number>(1);
}
