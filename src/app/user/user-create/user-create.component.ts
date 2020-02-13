import { Component, OnInit } from '@angular/core';

declare var Pusher: any;

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss']
})
export class UserCreateComponent implements OnInit {

  username: string = ''

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
    alert(this.username.trim())
  }

}
