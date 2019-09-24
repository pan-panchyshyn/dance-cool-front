import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupListComponent } from './group-list/group-list.component';
import { GroupInfoComponent } from './group-info/group-info.component';
import { ManagingStudentsComponent } from './managing-students/managing-students.component';
import { AddExistingStudentComponent } from './managing-students/add-existing-student/add-existing-student.component';
import { CreateStudentComponent } from './managing-students/create-student/create-student.component';
import { GroupAdminComponent } from './group-admin.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    GroupAdminComponent,
    GroupListComponent,
    GroupInfoComponent,
    ManagingStudentsComponent,
    AddExistingStudentComponent,
    CreateStudentComponent
  ],
  imports: [CommonModule, RouterModule, FormsModule],
  exports: [
    GroupAdminComponent,
    GroupListComponent,
    GroupInfoComponent,
    ManagingStudentsComponent,
    AddExistingStudentComponent,
    CreateStudentComponent
  ]
})
export class GroupAdminModule {}
