import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { BaseService } from './base.service';
import { User } from '../models/User';
import { DanceGroup } from '../models/DanceGroup';

@Injectable({
  providedIn: 'root'
})
export class GroupService {
  constructor(private http: HttpClient, private baseService: BaseService) {}
  url = this.baseService.getRESTUrl();

  onReloadStudent = new Subject();

  addExistingStudentVisibility = new Subject<boolean>();
  createStudentVisibility = new Subject<boolean>();

  getGroupStudents(groupId: number): Observable<User[]> {
    const url = `${this.url}api/groups/${groupId}/users/`;
    return this.http.get<User[]>(url);
  }

  getGroupInfo(groupId: number): Observable<DanceGroup> {
    const url = `${this.url}api/groups/${groupId}`;
    return this.http.get<DanceGroup>(url);
  }

  getAllGroups(): Observable<DanceGroup[]> {
    const url = `${this.url}api/groups`;
    return this.http.get<DanceGroup[]>(url);
  }
}
