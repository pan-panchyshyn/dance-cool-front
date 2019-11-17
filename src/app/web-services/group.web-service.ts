import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { BaseWebService } from './base.web-service';
import { User } from '../models/User';
import { DanceGroup } from '../models/DanceGroup';
import { SkillLevel } from '../models/SkillLevel';

@Injectable({
  providedIn: 'root'
})
export class GroupWebService extends BaseWebService {
  

  constructor(private http: HttpClient) {
    super();
  }

    getGroups(): Observable<DanceGroup[]> {
    const url = `${this.url}groups`;
    return this.http.get<DanceGroup[]>(url);
  }

  getGroupInfo(groupId: number): Observable<DanceGroup> {
    const url = `${this.url}groups/${groupId}`;
    return this.http.get<DanceGroup>(url);
  }

  getGroupStudents(groupId: number): Observable<User[]> {
    const url = `${this.url}groups/${groupId}/users/`;
    return this.http.get<User[]>(url);
  }

  getStudentsNotInGroup(groupId: number): Observable<User[]> {
    const url = `${this.url}groups/${groupId}/students/not-in-group`;
    return this.http.get<User[]>(url);
  }

  getSkillLevels(): Observable<SkillLevel[]> {
    const url = `${this.url}skill-levels`;
    return this.http.get<SkillLevel[]>(url);
  }

  getMentors(): Observable<User[]> {
    const url = `${this.url}mentors`;
    return this.http.get<User[]>(url);
  }
}
