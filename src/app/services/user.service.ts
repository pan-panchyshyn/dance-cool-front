import { Injectable } from '@angular/core';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { User } from '../models/User';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BaseService } from './base.service';
import { GroupService } from './group.service';
import { NewUserModel } from '../models/NewUserModel';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(
    private http: HttpClient,
    private baseService: BaseService,
    private groupService: GroupService
  ) {}

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  userId = new BehaviorSubject<number>(0);

  url = this.baseService.getRESTUrl();

  addNewUser(newUserModel: NewUserModel): Observable<User> {
    const url = `${this.url}api/users/`;
    return this.http
      .post<User>(url, newUserModel, this.httpOptions)
      .pipe(tap((newUser: User) => this.userId.next(newUser.id)));
  }

  addNewStudentToGroup(newUser: User, groupId: number): Observable<User> {
    const url = `${this.url}api/group/${groupId}/new-user/`;

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
}
