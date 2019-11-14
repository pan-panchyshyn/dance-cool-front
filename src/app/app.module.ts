import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { GroupAdminModule } from './group-admin/group-admin.module';
import { AttendanceModule } from './attendance/attendance.module';
import { AdminComponent } from './components/admin/admin.component';
import { AppMaterialModule } from './app.material.module';
import { GuestModule } from './guest/guest.module';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    AppMaterialModule,
    GroupAdminModule,
    AttendanceModule,
    GuestModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
