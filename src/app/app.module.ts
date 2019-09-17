import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { GuestPageComponent } from './components/guest-page/guest-page.component';
import { TittleGuestPageComponent } from './components/guest-page/tittle-guest-page/tittle-guest-page.component';
import { GroupPageComponent } from './components/group-page/group-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    GuestPageComponent,
    TittleGuestPageComponent,
    GroupPageComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
