import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { BaseWebService } from './base.web-service';
import { Lesson } from '../models/Lesson';
@Injectable({
  providedIn: 'root'
})
export class LessonWebService extends BaseWebService {
  url = `${environment.apiUrl}lessons`;
  constructor(private http: HttpClient) {
    super();
  }

  getLessonsForGroupInMonth(
    groupId: number,
    month: number
  ): Observable<Lesson[]> {
    const url = `${this.url}/${groupId}/${month}`;
    return this.http.get<Lesson[]>(url);
  }
}
