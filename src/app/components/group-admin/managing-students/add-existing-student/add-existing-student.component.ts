import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/User';
import { UserWebService } from 'src/app/web-services/user.web-service';
import { GroupWebService } from 'src/app/web-services/group.web-service';
import { GroupService } from 'src/app/services/group.service';

@Component({
  selector: 'app-add-existing-student',
  templateUrl: './add-existing-student.component.html',
  styleUrls: ['./add-existing-student.component.css']
})
export class AddExistingStudentComponent implements OnInit {
  studentToAdd: User;
  studentsNotInGroup: User[];
  groupId: number;
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

  getStudentsNotInGroup() {
    this.route.params.subscribe(params => {
      const groupId = +params.groupId;
      this.groupWebService
        .getStudentsNotInGroup(groupId)
        .subscribe(data => (this.studentsNotInGroup = data));
    });
  }

  addStudentToGroup() {
    this.route.params.subscribe(params => {
      const groupId = +params.groupId;
      this.userService
        .addExistingStudentToGroup(this.studentToAdd.id, groupId)
        .subscribe(() => this.groupService.onReloadStudent.next());
    });
  }
}
