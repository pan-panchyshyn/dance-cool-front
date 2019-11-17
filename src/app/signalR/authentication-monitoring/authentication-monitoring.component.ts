import { Component, OnInit } from "@angular/core";
import { SignalRWebService } from "src/app/web-services/signalR/baseSignalr.web-service";
import { HubConnection } from "@aspnet/signalr";

@Component({
  selector: "app-authentication-monitoring",
  templateUrl: "./authentication-monitoring.component.html",
  styleUrls: ["./authentication-monitoring.component.css"]
})
export class AuthenticationMonitoringComponent implements OnInit {
  hubName = "authenticated-hub";
  connection: HubConnection;
  loggedUsers: string[];

  constructor(private signalRWebService: SignalRWebService) {}

  ngOnInit() {
    this.BuildConnection(this.hubName);
    this.connection.on("UserAuthorized", responce => {
      this.OnUserAuthorized(responce);
    });
    this.connection.start();
  }

  private BuildConnection(hubName: string) {
    this.connection = this.signalRWebService.buildConnectionOnHub(hubName);
  }

  private OnUserAuthorized(id: number) {
    console.log(`user ${id} has authorized`);
  }
}
