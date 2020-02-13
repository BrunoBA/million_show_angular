import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

declare var Pusher: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  userName: string = 'Bruno'

  constructor(http: HttpClient) {
    console.log(http)
  }

  ngOnInit() {
    Pusher.logToConsole = true;

    var pusher = new Pusher('c78e85722776effd2a18', {
      cluster: 'us2',
      forceTLS: true
    });

    var channel = pusher.subscribe('room-id');
    channel.bind('new-user', function (data) {
      alert(JSON.stringify(data));
    });
  }

  joinRoom(): void {
    alert("Aaai papaai")
  }
}
