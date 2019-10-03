import { Injectable } from '@angular/core';

import { Subject, ReplaySubject, BehaviorSubject } from 'rxjs';

export class GroupService {
  groupIdSubj = new ReplaySubject<number>(1);

  constructor() {}

  onReloadStudent = new Subject();

  addExistingStudentVisibility = new Subject<boolean>();
  createStudentVisibility = new Subject<boolean>();

  isGroupEdited = new BehaviorSubject<boolean>(false);

  currentGroup = new Subject<number>();
}
