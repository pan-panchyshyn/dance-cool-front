import { Component, OnInit } from '@angular/core';
import { NewUserModel } from 'src/app/models/NewUserModel';
import { GroupService } from 'src/app/services/group.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit {
  newStudentModel: NewUserModel = {
    firstName: '',
    lastName: '',
    phoneNumber: ''
  };

  constructor(
    private groupService: GroupService,
    private userService: UserService
  ) {}

  addNewStudent() {
    this.userService
      .addNewUser(this.newStudentModel)
      .subscribe(model => console.log(model));
  }

  ngOnInit() {}
}
