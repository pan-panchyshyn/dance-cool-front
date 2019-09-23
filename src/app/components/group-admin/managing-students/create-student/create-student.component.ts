import { Component, OnInit } from '@angular/core';
import { GroupService } from 'src/app/services/group.service';
import { UserWebService } from 'src/app/web-services/user.web-service';
import { NewUserModel } from 'src/app/models/NewUserModel';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit {
  groupId: number;
  newStudentModel: NewUserModel = {
    firstName: '',
    lastName: '',
    phoneNumber: ''
  };

  constructor(
    private groupService: GroupService,
    private userWebService: UserWebService
  ) {}

  ngOnInit() {
    this.groupService.groupIdSubj.subscribe(
      groupId => (this.groupId = groupId)
    );
  }

  addNewStudentToGroup(): void {
    this.userWebService
      .addNewStudentToGroup(this.newStudentModel, this.groupId)
      .subscribe(() => {
        this.groupService.onReloadStudent.next(), console.error();
      });
  }

  close(): void {
    this.groupService.createStudentVisibility.next(false);
  }
}
