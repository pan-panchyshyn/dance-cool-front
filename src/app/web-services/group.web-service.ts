import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { BaseWebService } from './base.web-service';
import { User } from '../models/User';
import { DanceGroup } from '../models/DanceGroup';
import { SkillLevel } from '../models/SkillLevel';

@Injectable({
  providedIn: 'root'
})
export class GroupWebService extends BaseWebService {
  url = `${environment.apiUrl}groups`;

  constructor(private http: HttpClient) {
    super();
  }

  getGroups(): Observable<DanceGroup[]> {
    const url = `${this.url}`;
    return this.http.get<DanceGroup[]>(url);
  }

  getGroupInfo(groupId: number): Observable<DanceGroup> {
    const url = `${this.url}/${groupId}`;
    return this.http.get<DanceGroup>(url);
  }

  getGroupStudents(groupId: number): Observable<User[]> {
    const url = `${this.url}/${groupId}/users/`;
    return this.http.get<User[]>(url);
  }

  getStudentsNotInGroup(groupId: number): Observable<User[]> {
    const url = `${this.url}/${groupId}/students/not-in-group`;
    return this.http.get<User[]>(url);
  }

  getSkillLevels(): Observable<SkillLevel[]> {
    const url = `${this.url}/skill-levels`;
    return this.http.get<SkillLevel[]>(url);
  }

  getMentors(): Observable<User[]> {
    const url = `${this.url}/mentors`;
    return this.http.get<User[]>(url);
  }
}
