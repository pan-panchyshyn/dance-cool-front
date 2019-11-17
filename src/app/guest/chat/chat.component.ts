import { Component, OnInit } from "@angular/core";
import { SignalRWebService } from "src/app/web-services/signalR/baseSignalr.web-service";
import { HubConnection } from "@aspnet/signalr";
import { UserWebService } from "src/app/web-services/user.web-service";

@Component({
  selector: "app-chat",
  templateUrl: "./chat.component.html",
  styleUrls: ["./chat.component.css"]
})
export class ChatComponent implements OnInit {
  hubName = "authenticated-hub";
  connection: HubConnection;
  loggedUsers: string[] = [];

  constructor(
    private signalRWebService: SignalRWebService,
    private userWebSerwice: UserWebService
  ) {}

  ngOnInit() {
    this.BuildConnection(this.hubName);
    this.connection.start();
    this.connection.on("UserAuthorized", responce => {
      this.OnUserAuthorized(responce);
    });
    this.connection.on("UserRegistered", responce => {
      this.OnUserRegistered(responce);
    });
    this.connection.on("UserLoggedOut", responce => {
      this.OnUserLoggedOut(responce);
    });
  }

  private BuildConnection(hubName: string) {
    this.connection = this.signalRWebService.buildConnectionOnHub(hubName);
  }

  private OnUserAuthorized(id: number) {
    this.userWebSerwice.GetUserById(id).subscribe(user => {
      this.loggedUsers.push(
        `${user.firstName} ${user.lastName} has been authorized at ${new Date(
          new Date().getTime()
        )}`
      );
    });
  }

  private OnUserRegistered(id: number) {
    this.userWebSerwice.GetUserById(id).subscribe(user => {
      this.loggedUsers.push(
        `${user.firstName} ${user.lastName} has been registered  at ${new Date(
          new Date().getTime()
        )}`
      );
    });
  }

  private OnUserLoggedOut(id: number) {
    this.userWebSerwice.GetUserById(id).subscribe(user => {
      this.loggedUsers.push(
        `${user.firstName} ${user.lastName} has been logged out at ${new Date(
          new Date().getTime()
        )}`
      );
    });
  }

  // constructor(private signalRWebService: SignalRWebService) {}

  // ngOnInit() {}

  // start_connection() {
  //   var con = this.signalRWebService.buildConnectionOnHub("users-hub");

  //   con.on("UserAdded", userModel => {
  //     console.log("la la land");
  //   });
  //   con.start();
  // }
}
