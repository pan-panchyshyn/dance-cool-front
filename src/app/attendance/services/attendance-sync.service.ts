import { Injectable } from '@angular/core';

import { Subject, ReplaySubject } from 'rxjs';
import { AttendanceModule } from '../attendance.module';

@Injectable({
  providedIn: AttendanceModule
})
export class GroupService {}
