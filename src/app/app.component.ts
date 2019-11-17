import { Component } from "@angular/core";
import { AuthenticationWebService } from "./web-services/authentication-web-services/authentication.web-service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  constructor(private authenticationService: AuthenticationWebService) {}
}
