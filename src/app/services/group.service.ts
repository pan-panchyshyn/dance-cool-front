import { Injectable } from '@angular/core';

import { Subject, ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GroupService {
  groupIdSubj = new ReplaySubject<number>(1);

  constructor() {}

  onReloadStudent = new Subject();

  addExistingStudentVisibility = new Subject<boolean>();
  createStudentVisibility = new Subject<boolean>();
  currentGroup = new Subject<number>();
}
