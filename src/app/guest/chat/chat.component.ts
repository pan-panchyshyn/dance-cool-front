import { Component, OnInit } from "@angular/core";
import { HubConnection, HubConnectionBuilder } from "@aspnet/signalr";
import { SignalRWebService } from "src/app/web-services/signalR/baseSignalr.web-service";

@Component({
  selector: "app-chat",
  templateUrl: "./chat.component.html",
  styleUrls: ["./chat.component.css"]
})
export class ChatComponent implements OnInit {
  constructor(private signalRWebService: SignalRWebService) {}

  ngOnInit() {}

  start_connection() {
    var con = this.signalRWebService.buildConnectionOnHub("users-hub");

    con.on("UserAdded", userModel => {
      console.log("la la land");
    });
    con.start();
  }
}
