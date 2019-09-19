import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { GuestPageComponent } from './components/guest-page/guest-page.component';
import { TittleGuestPageComponent } from './components/guest-page/tittle-guest-page/tittle-guest-page.component';
import { GroupInfoComponent } from './components/group-admin/group-info/group-info.component';
import { GroupListComponent } from './components/group-admin/group-list/group-list.component';
import { FormsModule } from '@angular/forms';
import { GroupAdminComponent } from './components/group-admin/group-admin.component';
import { ManagingStudentsComponent } from './components/group-admin/managing-students/managing-students.component';
import { CreateStudentComponent } from './components/group-admin/managing-students/create-student/create-student.component';
import { AddExistingStudentComponent } from './components/group-admin/managing-students/add-existing-student/add-existing-student.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    GuestPageComponent,
    TittleGuestPageComponent,
    GroupInfoComponent,
    GroupListComponent,
    GroupAdminComponent,
    ManagingStudentsComponent,
    CreateStudentComponent,
    AddExistingStudentComponent
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
