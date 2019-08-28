import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { FooterComponent } from "./footer/footer.component";
import { GuestPageComponent } from './guest-page/guest-page.component';
import { TittleGuestPageComponent } from './guest-page/tittle-guest-page/tittle-guest-page.component';

@NgModule({
  declarations: [AppComponent, NavBarComponent, FooterComponent, GuestPageComponent, TittleGuestPageComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
