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
import { GroupService } from './services/group.service';
import { GroupEditComponent } from './group-edit/group-edit.component';
import { GroupAdminRoutingModule } from './group-admin-routing.module';

@NgModule({
  declarations: [
    GroupAdminComponent,
    GroupListComponent,
    GroupInfoComponent,
    ManagingStudentsComponent,
    AddExistingStudentComponent,
    CreateStudentComponent,
    GroupEditComponent
  ],
  imports: [CommonModule, RouterModule, FormsModule, GroupAdminRoutingModule],
  exports: [
    GroupAdminComponent,
    GroupListComponent,
    GroupInfoComponent,
    ManagingStudentsComponent,
    AddExistingStudentComponent,
    CreateStudentComponent
  ],
  providers: [GroupService]
})
export class GroupAdminModule {}
