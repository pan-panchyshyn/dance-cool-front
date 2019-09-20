import { Component, OnInit } from '@angular/core';
import { NewUserModel } from 'src/app/models/NewUserModel';
import { GroupService } from 'src/app/services/group.service';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit {
  newStudentModel: User = {
    firstName: '',
    lastName: '',
    phoneNumber: ''
  };

  constructor(
    private groupService: GroupService,
    private userService: UserService
  ) {}

  addNewStudentToGroup(): void {
    const saveUserObservable = this.userService
      .addNewStudentToGroup(
        this.newStudentModel,
        this.groupService.groupId.value
      )
      .subscribe(() => {
        this.groupService.onReloadStudent.next(), console.error();
      });

    // on success push event to the sync service
  }

  ngOnInit() {}
}
