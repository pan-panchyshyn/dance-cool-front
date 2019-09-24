import { Component, OnInit } from '@angular/core';
import { GroupService } from 'src/app/group-admin/services/group.service';
import { DanceGroup } from '../../models/DanceGroup';
import { User } from '../../models/User';
import { ActivatedRoute } from '@angular/router';
import { GroupWebService } from 'src/app/web-services/group.web-service';

@Component({
  selector: 'app-group-info',
  templateUrl: './group-info.component.html',
  styleUrls: ['./group-info.component.css']
})
export class GroupInfoComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private groupWebService: GroupWebService,
    private groupSyncService: GroupService
  ) {}

  students: User[] = [];
  groupInfo: DanceGroup;

  ngOnInit() {
    const groupIdSubj = this.groupSyncService.groupIdSubj;

    this.groupSyncService.onReloadStudent.subscribe(() => {
      this.activatedRoute.params.subscribe(params => {
        const groupId = +params.groupId;
        groupIdSubj.next(groupId);
      });
    });

    groupIdSubj.subscribe(groupId => {
      this.loadStudents(groupId);
      this.loadGroupInfo(groupId);
    });

    this.groupSyncService.onReloadStudent.next();
    this.groupSyncService.addExistingStudentVisibility.next(false);
    this.groupSyncService.createStudentVisibility.next(false);
  }

  private loadStudents(groupId: number): void {
    this.groupWebService
      .getGroupStudents(groupId)
      .subscribe(students => (this.students = students));
  }

  private loadGroupInfo(groupId: number) {
    this.groupWebService
      .getGroupInfo(groupId)
      .subscribe(data => (this.groupInfo = data));
  }

  openCreateStudentForm() {
    this.groupSyncService.createStudentVisibility.next(true);
  }

  openAddExistingStudentForm() {
    this.groupSyncService.addExistingStudentVisibility.next(true);
  }
}
