import { Injectable } from '@angular/core';

import { Subject, ReplaySubject } from 'rxjs';
import { GroupAdminModule } from '../group-admin.module';

@Injectable({
  providedIn: GroupAdminModule
})
export class GroupService {
  groupIdSubj = new ReplaySubject<number>(1);

  constructor() {}

  onReloadStudent = new Subject();

  addExistingStudentVisibility = new Subject<boolean>();
  createStudentVisibility = new Subject<boolean>();
  currentGroup = new Subject<number>();
}
