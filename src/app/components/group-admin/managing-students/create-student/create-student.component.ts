import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit {
  studentFirstName = '';
  studentLastName = '';
  studentPhoneNumber = '';

  constructor() {}

  log() {
    console.log(
      this.studentFirstName,
      this.studentLastName,
      this.studentPhoneNumber
    );
  }

  ngOnInit() {}
}
