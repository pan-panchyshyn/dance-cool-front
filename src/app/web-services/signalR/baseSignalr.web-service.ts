import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { HubConnectionBuilder, HubConnection } from "@aspnet/signalr";

import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root"
})
export class SignalRWebService {
  url = `${environment.apiUrl}`;

  public buildConnectionOnHub(hubName: string): HubConnection {
    return new HubConnectionBuilder()
      .withUrl(`http://localhost:51118/${hubName}`)
      .build();
  }
  constructor(private http: HttpClient) {}
}
