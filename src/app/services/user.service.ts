import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { User } from '../models/User';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { BaseService } from './base.service';
import { GroupService } from './group.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(
    private http: HttpClient,
    private baseService: BaseService,
    private groupService: GroupService
  ) {}

  userId = new Subject<number>();

  url = this.baseService.getRESTUrl();

  getMentorsNotInGroup(
    primMentorId: number,
    secMentorId = 0
  ): Observable<User[]> {
    const url = `${this.url}/groups/mentors/not-in-group`;
    return this.http.get<User[]>(url);
  }
}
