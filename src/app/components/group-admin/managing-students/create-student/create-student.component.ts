import { Component, OnInit } from '@angular/core';
import { NewUserModel } from 'src/app/models/NewUserModel';
import { GroupService } from 'src/app/services/group.service';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/User';
import { ActivatedRoute } from '@angular/router';

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
    private route: ActivatedRoute,
    private groupService: GroupService,
    private userService: UserService
  ) {}

  addNewStudentToGroup(): void {
    this.route.params.subscribe(params => {
      const groupId = +params['groupId'];
      const saveUserObservable = this.userService
        .addNewStudentToGroup(this.newStudentModel, groupId)
        .subscribe(() => {
          this.groupService.onReloadStudent.next(), console.error();
        });
    });
  }

  ngOnInit() {}
}
