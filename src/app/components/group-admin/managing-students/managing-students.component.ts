import { Component, OnInit } from '@angular/core';
import { GroupService } from 'src/app/services/group.service';

@Component({
  selector: 'app-managing-students',
  templateUrl: './managing-students.component.html',
  styleUrls: ['./managing-students.component.css']
})
export class ManagingStudentsComponent implements OnInit {
  constructor(private groupService: GroupService) {}

  createStudentVisibility: boolean = false;
  addExsitingStudentVisibility: boolean = false;

  ngOnInit() {
    this.groupService.createStudentVisibility.subscribe(value => {
      if (!this.createStudentVisibility) {
        this.createStudentVisibility = value;
      } else {
        this.createStudentVisibility = false;
      }
      this.addExsitingStudentVisibility = !value;
    });

    this.groupService.addExistingStudentVisibility.subscribe(value => {
      this.addExsitingStudentVisibility = value;
      this.createStudentVisibility = !value;
    });
  }
}
