import { Component, OnInit, Input } from '@angular/core';
import { GroupService } from 'src/app/services/group.service';
import { DanceGroup } from '../../../models/DanceGroup';
import { User } from '../../../models/User';

@Component({
  selector: 'app-group-info',
  templateUrl: './group-info.component.html',
  styleUrls: ['./group-info.component.css']
})
export class GroupInfoComponent implements OnInit {
  @Input() groupId = 2;

  constructor(private groupService: GroupService) {}
  students: User[] = [];
  groupInfo: DanceGroup;

  ngOnInit() {
    this.getStudents();
    this.getGroupInfo();
  }

  getStudents() {
    this.groupService.groupId.subscribe((value: number) => {
      this.groupService
        .getGroupStudents(value)
        .subscribe(r => (this.students = r));
    });
  }

  getGroupInfo() {
    this.groupService.groupId.subscribe((value: number) => {
      this.groupService
        .getGroupInfo(value)
        .subscribe(data => (this.groupInfo = data));
    });
  }

  openCreateStudentForm() {
    this.groupService.createStudentVisibility.next(true);
  }

  openAddExistingStudentForm() {
    this.groupService.addExistingStudentVisibility.next(true);
  }
}
