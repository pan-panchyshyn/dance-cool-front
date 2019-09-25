import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { BaseWebService } from './base.web-service';
import { Attendance } from '../models/Attendance';
@Injectable({
  providedIn: 'root'
})
export class AttendanceWebService extends BaseWebService {
  url = `${this.baseUrl}api/attendance`;
  constructor(private http: HttpClient) {
    super();
  }

  getAttendancesForGroupInMonth(
    groupId: number,
    month: number
  ): Observable<Attendance[]> {
    const url = `${this.url}/${groupId}/${month}`;
    return this.http.get<Attendance[]>(url);
  }
}
