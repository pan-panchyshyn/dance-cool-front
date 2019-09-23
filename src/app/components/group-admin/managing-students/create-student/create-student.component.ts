import { Component, OnInit } from '@angular/core';
import { GroupService } from 'src/app/services/group.service';
import { User } from 'src/app/models/User';
import { UserWebService } from 'src/app/web-services/user.web-service';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit {
  groupId: number;
  newStudentModel: User = {
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
}
