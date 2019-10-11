import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GroupWebService } from 'src/app/web-services/group.web-service';
import { GroupService } from '../services/group.service';
import { User } from 'src/app/models/User';
import { DanceGroup } from 'src/app/models/DanceGroup';
import { SkillLevel } from 'src/app/models/SkillLevel';

@Component({
  selector: 'app-group-edit',
  templateUrl: './group-edit.component.html',
  styleUrls: ['./group-edit.component.css']
})
export class GroupEditComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private groupWebService: GroupWebService,
    private groupSyncService: GroupService
  ) {}

  students: User[] = [];
  mentors: User[] = [];
  mentorsToChoose: User[] = [];
  groupInfo: DanceGroup;
  groupNewInfo: DanceGroup;
  skillLevels: SkillLevel[];
  isDirty: boolean;
  canEdit: boolean = false;

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
    this.loadMentors();

    this.groupSyncService.onReloadStudent.next();
    this.groupSyncService.addExistingStudentVisibility.next(false);
    this.groupSyncService.createStudentVisibility.next(false);

    this.groupNewInfo = this.groupInfo;
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
      this.groupNewInfo = groupInfo;
    });
  }

  private loadSkillLevels(): void {
    this.groupWebService
      .getSkillLevels()
      .subscribe(data => (this.skillLevels = data));
  }

  private loadMentors(): void {
    let newMentors: User[] = [];
    this.groupWebService.getMentors().subscribe(data => {
      newMentors = data;
      this.mentors = newMentors;
    });
  }

  enableEditMode(): void {
    this.canEdit = true;
  }

  filterMentors(): void {
    this.mentorsToChoose = this.mentors.filter(
      mentor =>
        mentor.id !== this.groupNewInfo.primaryMentor.id &&
        mentor.id !== this.groupNewInfo.secondaryMentor.id
    );
  }

  setNewPrimaryMentor(newPrimaMentorId: number): void {
    this.groupNewInfo.primaryMentor = this.mentors.find(
      mentor => mentor.id === +newPrimaMentorId
    );
    this.groupSyncService.isGroupEdited.next(true);
  }

  setNewSecondaryMentor(newSecMentorId?: number): void {
    +newSecMentorId > 0
      ? (this.groupNewInfo.secondaryMentor = this.mentors.find(
          mentor => mentor.id === +newSecMentorId
        ))
      : (this.groupNewInfo.secondaryMentor = null);

    this.groupSyncService.isGroupEdited.next(true);
  }

  setNewSkillLevel(newSkillLevelId: number): void {
    this.groupNewInfo.groupLevel = this.skillLevels.find(
      level => level.id === +newSkillLevelId
    );
    this.groupSyncService.isGroupEdited.next(true);
  }

  openCreateStudentForm() {
    this.groupSyncService.createStudentVisibility.next(true);
  }

  openAddExistingStudentForm() {
    this.groupSyncService.addExistingStudentVisibility.next(true);
  }
}
