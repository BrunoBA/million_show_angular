import { Component, OnInit } from '@angular/core';

import { UserService } from 'src/app/services/user.service';
import { ActivatedRoute } from '@angular/router';

declare var Pusher: any;

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  users: Array<string>
  colors: Array<string> = [
    'mdl-color--red',
    'mdl-color--pink',
    'mdl-color--purple',
    'mdl-color--deep-purple',
    'mdl-color--indigo',
    'mdl-color--blue',
    'mdl-color--light-blue',
    'mdl-color--cyan',
    'mdl-color--teal',
    'mdl-color--green',
    'mdl-color--light-green',
    'mdl-color--lime',
    'mdl-color--yellow',
    'mdl-color--amber',
    'mdl-color--orange',
    'mdl-color--deep-orange',
    'mdl-color--brown',
    'mdl-color--grey',
    'mdl-color--blue-grey'
  ]
  constructor(private userService: UserService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.initPusherObserver()
    this.getAllUsers()
  }

  private initPusherObserver(): void {
    Pusher.logToConsole = true;

    const pusher = new Pusher('c78e85722776effd2a18', {
      cluster: 'us2',
      forceTLS: true
    });

    const channel = pusher.subscribe('room-id');
    channel.bind('new-user', (data) => {
      this.getAllUsers()
    });
  }

  private getAllUsers(): void {
    const questionId = this.activatedRoute.snapshot.params.questionId
    this.userService.getAll(questionId).subscribe(
      response => {
        this.users = response.data
      },
      err => {
        console.log("Erro");
        this.users = []
      }
    )
  }

}
