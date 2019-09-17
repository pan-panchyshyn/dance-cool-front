import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BaseService } from './base.service';
import { User } from '../models/User';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GroupService {
  constructor(private http: HttpClient, private baseService: BaseService) {}
  url = this.baseService.getRESTUrl();

  getGroupStudents(groupId: number): Observable<User[]> {
    const url = `${this.url}/api/groups/${groupId}/users/`;
    return this.http
      .get<User[]>(url)
      .pipe(
        tap(
          () =>
            this.baseService.log(
              `recieved ustudents of group with id ${groupId}`
            ),
          catchError(
            this.baseService.handleError<User[]>('getGroupStudents', [])
          )
        )
      );
  }
}
