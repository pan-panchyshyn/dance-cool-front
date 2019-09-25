import { Component, OnInit } from '@angular/core';

import { LessonService } from '../services/lesson-sync.service';
import { GroupWebService } from 'src/app/web-services/group.web-service';
import { LessonWebService } from 'src/app/web-services/lesson.web-service';

import { DanceGroup } from 'src/app/models/DanceGroup';
import { User } from 'src/app/models/User';
import { Lesson } from 'src/app/models/Lesson';
import { AttendanceWebService } from 'src/app/web-services/attendance.web-service';
import { Attendance } from 'src/app/models/Attendance';

@Component({
  selector: 'app-attendance-page',
  templateUrl: './attendance-page.component.html'
})
export class AttendancePageComponent implements OnInit {
  groups: DanceGroup[];
  students: User[];
  groupId: number;
  group: DanceGroup;
  monthNum: 5;
  lessons: Lesson[];
  attendances: Attendance[];

  constructor(
    private groupWebService: GroupWebService,
    private lessonService: LessonService,
    private lessonWebService: LessonWebService,
    private attendanceWebService: AttendanceWebService
  ) {}

  ngOnInit() {
    this.getGroups();
    this.lessonService.groupId.subscribe(num => {
      this.groupId = num;
    });
    this.getStudents();
    this.getLessons();
    this.getAttendances();
  }

  changeGroup(groupId) {
    this.lessonService.groupId.next(groupId);
  }

  getGroups(): void {
    this.groupWebService.getGroups().subscribe(data => {
      this.groups = data;
    });
  }

  private getStudents(): void {
    this.lessonService.groupId.subscribe(() => {
      this.groupWebService.getGroupStudents(this.groupId).subscribe(data => {
        this.students = data;
      });
    });
  }

  private getLessons(): void {
    this.lessonService.groupId.subscribe(() => {
      this.lessonWebService
        .getLessonsForGroupInMonth(this.groupId, 5)
        .subscribe(data => {
          this.lessons = data;
        });
    });
  }

  private getAttendances(): void {
    this.lessonService.groupId.subscribe(() => {
      this.attendanceWebService
        .getAttendancesForGroupInMonth(this.groupId, 5)
        .subscribe(data => {
          this.attendances = data;
        });
    });
  }
}
