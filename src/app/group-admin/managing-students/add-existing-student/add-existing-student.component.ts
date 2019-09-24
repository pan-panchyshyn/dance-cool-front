import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/User';
import { UserWebService } from 'src/app/web-services/user.web-service';
import { GroupWebService } from 'src/app/web-services/group.web-service';
import { GroupService } from 'src/app/group-admin/services/group.service';

@Component({
  selector: 'app-add-existing-student',
  templateUrl: './add-existing-student.component.html',
  styleUrls: ['./add-existing-student.component.css']
})
export class AddExistingStudentComponent implements OnInit {
  studentIdToAdd: number;
  studentsNotInGroup: User[];
  groupId: number;
  isStudentSelected = false;
  constructor(
    private route: ActivatedRoute,
    private groupWebService: GroupWebService,
    private groupService: GroupService,
    private userService: UserWebService
  ) {}

  ngOnInit() {
    this.getStudentsNotInGroup();
    this.route.params.subscribe(params => {
      this.groupId = +params.groupId;
    });
  }

  private getStudentsNotInGroup(): void {
    this.route.params.subscribe(params => {
      const groupId = +params.groupId;
      this.groupWebService
        .getStudentsNotInGroup(groupId)
        .subscribe(data => (this.studentsNotInGroup = data));
    });
  }

  addStudentToGroup(): void {
    this.route.params.subscribe(params => {
      const groupId = +params.groupId;
      this.userService
        .addExistingStudentToGroup(this.studentIdToAdd, groupId)
        .subscribe(() => this.groupService.onReloadStudent.next());
    });
  }

  selectStudent(selectedStudentId: number) {
    if (selectedStudentId === this.studentIdToAdd) {
      this.studentIdToAdd = 0;
      this.isStudentSelected = false;
    } else {
      this.studentIdToAdd = selectedStudentId;
      this.isStudentSelected = true;
    }
  }

  close(): void {
    this.groupService.addExistingStudentVisibility.next(false);
  }
}
