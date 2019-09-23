import { Component, OnInit, Input } from '@angular/core';
import { GroupService } from 'src/app/services/group.service';
import { DanceGroup } from '../../../models/DanceGroup';
import { User } from '../../../models/User';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-group-info',
  templateUrl: './group-info.component.html',
  styleUrls: ['./group-info.component.css']
})
export class GroupInfoComponent implements OnInit {
  groupId: number;
  constructor(
    private groupService: GroupService,
    private route: ActivatedRoute
  ) {}
  students: User[] = [];
  groupInfo: DanceGroup;

  ngOnInit() {
    this.getStudents();
    this.getGroupInfo();
    this.groupService.onReloadStudent.next();
  }

  getStudents() {
    this.groupService.onReloadStudent.subscribe(() => {
      this.route.params.subscribe(params => {
        this.groupId = +params['groupId'];
        this.groupService
          .getGroupStudents(this.groupId)
          .subscribe(data => (this.students = data));
      });
    });
  }

  getGroupInfo() {
    this.groupService.onReloadStudent.subscribe(() => {
      this.route.params.subscribe(params => {
        this.groupId = +params['groupId'];
        this.groupService
          .getGroupInfo(this.groupId)
          .subscribe(data => (this.groupInfo = data));
      });
    });
  }

  openCreateStudentForm() {
    this.groupService.createStudentVisibility.next(true);
  }

  openAddExistingStudentForm() {
    this.groupService.addExistingStudentVisibility.next(true);
  }
}
