import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { User } from '../models/User';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BaseService } from './base.service';
import { GroupService } from './group.service';
import { NewUserModel } from '../models/NewUserModel';

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

  userId = new Subject<number>();

  url = this.baseService.getRESTUrl();

  getMentorsNotInGroup(
    primMentorId: number,
    secMentorId = 0
  ): Observable<User[]> {
    const url = `${this.url}groups/mentors/not-in-group`;
    return this.http.get<User[]>(url);
  }

  addNewUser(newUserModel: NewUserModel) {
    const url = `${this.url}api/users/`;
    return this.http.post<NewUserModel>(url, newUserModel, this.httpOptions);
  }
}
