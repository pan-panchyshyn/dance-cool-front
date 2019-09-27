import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GroupWebService } from 'src/app/web-services/group.web-service';
import { GroupService } from '../services/group.service';
import { User } from 'src/app/models/User';
import { DanceGroup } from 'src/app/models/DanceGroup';
import { SkillLevel } from 'src/app/models/SkillLevel';

@Component({
  selector: 'app-group-edit',
  templateUrl: './group-edit.component.html',
  styleUrls: ['./group-edit.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GroupEditComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private groupWebService: GroupWebService,
    private groupSyncService: GroupService
  ) {}

  students: User[] = [];
  groupInfo: DanceGroup;
  skillLevels: SkillLevel[];

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

    this.loadSkillLevels();

    this.groupSyncService.onReloadStudent.next();
    this.groupSyncService.addExistingStudentVisibility.next(false);
    this.groupSyncService.createStudentVisibility.next(false);
  }

  private loadStudents(groupId: number): void {
    let newStudents: User[];
    this.groupWebService.getGroupStudents(groupId).subscribe(data => {
      newStudents = data;
      this.students = newStudents;
    });
  }

  private loadGroupInfo(groupId: number) {
    let groupInfo: DanceGroup;
    this.groupWebService.getGroupInfo(groupId).subscribe(data => {
      groupInfo = data;
      this.groupInfo = groupInfo;
    });
  }

  private loadSkillLevels(): void {
    this.groupWebService
      .getSkillLevels()
      .subscribe(data => (this.skillLevels = data));
  }

  openCreateStudentForm() {
    this.groupSyncService.createStudentVisibility.next(true);
  }

  openAddExistingStudentForm() {
    this.groupSyncService.addExistingStudentVisibility.next(true);
  }
}
