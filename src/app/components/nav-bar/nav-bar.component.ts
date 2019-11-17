import { Component, OnInit } from "@angular/core";

import { AuthenticationWebService } from "../../web-services/authentication-web-services/authentication.web-service";
import { User } from "src/app/models/User";

@Component({
  selector: "app-nav-bar",
  templateUrl: "./nav-bar.component.html",
  styleUrls: ["./nav-bar.component.css"]
})
export class NavBarComponent implements OnInit {
  navbarOpen = false;
  authenticatedUser: User;
  isAuthenticated = false;

  constructor(private authenticationWebService: AuthenticationWebService) {}

  ngOnInit() {
    this.authenticationWebService.authenticatedUser.subscribe(value => {
      if (value == null) {
        this.isAuthenticated = false;
      } else {
        this.isAuthenticated = true;
        this.authenticatedUser = value;
      }
    });
  }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
  LogOut(): void {
    this.authenticationWebService.LogOut();
  }
}
