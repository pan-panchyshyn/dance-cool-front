import { Component, OnInit } from '@angular/core';
import { HubConnection, HubConnectionBuilder } from '@aspnet/signalr';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  start_connection() {
    var con = new HubConnectionBuilder()
      .withUrl('http://localhost:59993/users-hub')
      .build();

    con.on('UserAdded', userModel => {
      console.log('privet');
    });
    con.start();
  }
}
