import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

import { User } from '../models/User';
import { BaseWebService } from './base.web-service';
import { GroupWebService } from './group.web-service';
import { NewUserModel } from '../models/NewUserModel';
import { UserGroup } from '../models/UserGroup';

@Injectable({
  providedIn: 'root'
})
export class UserWebService extends BaseWebService {
  userId = new BehaviorSubject<number>(0);

  constructor(private http: HttpClient, private groupService: GroupWebService) {
    super();
  }

  addNewUser(newUserModel: NewUserModel): Observable<User> {
    const url = `${this.baseUrl}api/users/`;
    return this.http
      .post<User>(url, newUserModel, this.httpOptions)
      .pipe(tap((newUser: User) => this.userId.next(newUser.id)));
  }

  addNewStudentToGroup(newUser: User, groupId: number): Observable<User> {
    const url = `${this.baseUrl}api/group/${groupId}/new-user/`;

    return this.http
      .post<User>(url, newUser, this.httpOptions)
      .pipe(
        tap(
          () => console.log('success'),
          () => console.log('error'),
          () => this.groupService.getGroupStudents(groupId)
        )
      );
  }

  addExistingStudentToGroup(
    studentId: number,
    groupId: number
  ): Observable<UserGroup> {
    const url = `${this.baseUrl}api/group/user/`;
    const connection: UserGroup = {
      userId: studentId,
      groupId
    };
    return this.http
      .post<UserGroup>(url, connection, this.httpOptions)
      .pipe(tap(() => console.log(), () => console.error()));
  }
}
